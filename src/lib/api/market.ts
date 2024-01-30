import { MarketItem } from "@/dummy";
import { client } from "../web3/view";
import { formatEther, getContract } from "viem";
import { parseUnits } from "viem";
import { Cerc20Abi } from "@/abi/Cerc20";
import { StoneAbi } from "@/abi/Stone";

const contracts = {
  manta: {
    stone: "0xEc901DA9c68E90798BbBb74c11406A32A70652C3",
  },
};

type Market = {
  icon: string;
  name: string;
  contract: string;
};

const market = [
  {
    icon: "stone",
    name: "STONE",
    contract: "0x033F5e084a627cC420980ED9B1476C84A92FC5D4",
  },
  {
    icon: "eth",
    name: "ETH",
    contract: "0xE103F874B2D144C5B327FA3d57069Bb19c0779e2",
  },
];

const stoneContract = getContract({
  // @ts-ignore
  address: "0xEc901DA9c68E90798BbBb74c11406A32A70652C3",
  abi: StoneAbi,
  client: client,
});

const ethPricePrice =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

export async function getMarket() {
  const ethPrice = await getEthPrice();

  const marketData = await Promise.all(
    market.map(async (m) => {
      return await getMarketData(m, Number(ethPrice));
    })
  );

  return marketData;
}

export async function getMarketData(market: Market, ethPrice: number) {
  const cerc20Contract = getContract({
    // @ts-ignore
    address: market.contract,
    abi: Cerc20Abi,
    client: client,
  });

  const cTokenDecimals = 8; // all cTokens have 8 decimal places
  const underlyingDecimals = 18;

  const totalSupply = await cerc20Contract.read.totalSupply();
  const totalBorrow = await cerc20Contract.read.totalBorrows();

  const exhangeRateStore = await cerc20Contract.read.exchangeRateStored();

  const scaleFactor = parseUnits("1", 18);

  const totalDeposited = Number(
    formatEther((totalSupply * exhangeRateStore) / scaleFactor)
  );

  const totalBorrowed = Number(formatEther(totalBorrow));

  let price = ethPrice;
  if (market.name === "STONE") {
    const priceWei = await stoneContract.read.tokenPrice();
    const finalPrice = formatEther(priceWei);
    price = Number(finalPrice) * ethPrice;
  }

  const item: MarketItem = {
    icon: market.icon,
    name: market.name,
    currentPrice: price,
    totalSupply: totalDeposited,
    totalSupplyUsd: totalDeposited * price,
    supplyBalance: 0.0,
    supplyBalanceUsd: 0.0,
    supplyAPY: 4.65,
    totalBorrow: totalBorrowed,
    totalBorrowUsd: totalBorrowed * price,
    borrowBalance: 0.0,
    borrowBalanceUsd: 0.0,
    borrowAPY: -1.65,
  };

  return item;
}

async function getEthPrice() {
  return fetch(ethPricePrice)
    .then((res) => res.json())
    .then((res) => res.ethereum.usd)
    .catch((err) => console.error(err));
}

async function getTotalSupply(address: string) {}
