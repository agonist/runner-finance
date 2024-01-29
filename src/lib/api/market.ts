import { cerc20Contract } from "../web3/view";
import { formatEther } from "viem";
import { parseUnits } from "viem";

export async function getMarketData() {
  const cTokenDecimals = 8; // all cTokens have 8 decimal places
  const underlyingDecimals = 18;

  const totalSupply = await cerc20Contract.read.totalSupply();
  const exhangeRateStore = await cerc20Contract.read.exchangeRateStored();

  const scaleFactor = parseUnits("1", 18);

  const totalDeposited = formatEther(
    (totalSupply * exhangeRateStore) / scaleFactor
  );

  return { totalSupply: totalDeposited };
}

async function getTotalSupply(address: string) {

  
}