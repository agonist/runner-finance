import { MarketItem } from "@/dummy";
import { client } from "../web3/view";
import { Address, formatEther, getAddress, getContract } from "viem";
import { parseUnits } from "viem";
import { Cerc20Abi } from "@/abi/Cerc20";
import { GlobalState } from "@/components/jotai-provider";
import { State } from "wagmi";
import { formatUnits } from "viem";

type Market = {
  icon: string;
  name: string;
  contract: string;
  decimals: number;
};

const market = [
  {
    icon: "stone",
    name: "STONE",
    contract: "0x033F5e084a627cC420980ED9B1476C84A92FC5D4",
    cgId: "stakestone-ether",
    decimals: 8,
  },
  {
    icon: "eth",
    name: "ETH",
    contract: "0xE103F874B2D144C5B327FA3d57069Bb19c0779e2",
    cgId: "ethereum",
    decimals: 18,
  },
];

async function fetchTokenPrice(tokenId: string) {
  return 2200;
  return fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res[tokenId].usd;
    })
    .catch((err) => console.error(err));
}

export async function fetchInitialState(
  wagmiState: State | undefined
): Promise<GlobalState> {
  const current = wagmiState?.connections.get(wagmiState.current!)
    ?.accounts[0] as unknown as readonly [`0x${string}`];
  console.log(current);

  const priceMap = new Map<string, number>();
  const onChainData = new Map();

  await Promise.all(
    market.map(async (m) => {
      const [price, data] = await Promise.all([
        fetchTokenPrice(m.cgId),
        // @ts-ignore
        getMarketData(m, current),
      ]);

      priceMap.set(m.cgId, price);
      onChainData.set(m.cgId, data);
    })
  );

  const data = await Promise.all(
    market.map(async (market) => {
      const price = priceMap.get(market.cgId) || 0;
      const {
        totalSupplied,
        totalBorrowed,
        supplyApy,
        borrowApy,
        suppliedBalance,
        borrowedBalance,
      } = onChainData.get(market.cgId) || {
        totalSupplied: 0,
        totalBorrowed: 0,
      };
      const item: MarketItem = {
        icon: market.icon,
        name: market.name,
        currentPrice: price,
        totalSupply: totalSupplied,
        totalSupplyUsd: totalSupplied * price,
        supplyBalance: suppliedBalance,
        supplyBalanceUsd: suppliedBalance * price,
        supplyAPY: supplyApy,
        totalBorrow: totalBorrowed,
        totalBorrowUsd: totalBorrowed * price,
        borrowBalance: borrowedBalance,
        borrowBalanceUsd: borrowedBalance * price,
        borrowAPY: borrowApy,
      };
      return item;
    })
  );

  return { market: data, priceFeed: priceMap };
}

export async function getMarketData(
  market: Market,
  currentAddress: `0x${string}` | undefined
) {
  const cerc20Contract = getContract({
    // @ts-ignore
    address: market.contract,
    abi: Cerc20Abi,
    client: client,
  });

  const cTokenDecimals = 8; // all cTokens have 8 decimal places
  const underlyingDecimals = 18;
  const blockPerDay = 8640; // ~1 every 10sec
  const daysPerYear = 365;
  const blockPerYear = blockPerDay * daysPerYear;
  

  let suppliedBalance = 0.0;
  let borrowedBalance = 0.0;

  if (currentAddress) {
    const [err, supplied, borrowed, mantissa] = await client.readContract({
      // @ts-ignore
      address: market.contract,
      abi: Cerc20Abi,
      functionName: "getAccountSnapshot",
      args: [currentAddress],
    });
    suppliedBalance = Number(formatUnits(supplied, market.decimals));
    borrowedBalance = Number(formatUnits(borrowed, market.decimals));
  }

  const [
    totalSupply,
    totalBorrow,
    exhangeRateStore,
    supplyRatePerBlock,
    borrowRatePerBlock,
  ] = await Promise.all([
    cerc20Contract.read.totalSupply(),
    cerc20Contract.read.totalBorrows(),
    cerc20Contract.read.exchangeRateStored(),
    cerc20Contract.read.supplyRatePerBlock(),
    cerc20Contract.read.borrowRatePerBlock(),
  ]);

  const scaleFactor = parseUnits("1", 18);

  const totalDeposited = Number(
    formatEther((totalSupply * exhangeRateStore) / scaleFactor)
  );

  const totalBorrowed = Number(formatEther(totalBorrow));

  const annualSupplyRate =
    Number(formatEther(supplyRatePerBlock)) * blockPerYear;
  let supplyAPY =
    Math.pow(1 + annualSupplyRate / blockPerYear, blockPerYear) - 1;
  let supplyAPYfinal = supplyAPY * 100;

  // const supplyApy = (Math.pow(n + 1, daysPerYear) - 1) * 100;
  // const borrowApy = (Math.pow(b + 1, daysPerYear) - 1) * 100;

  return {
    totalSupplied: totalDeposited,
    totalBorrowed: totalBorrowed,
    supplyApy: supplyAPYfinal,
    borrowApy: supplyAPYfinal,
    suppliedBalance: suppliedBalance,
    borrowedBalance: borrowedBalance,
  };
}
