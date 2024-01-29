import { Cerc20Abi } from "@/abi/Cerc20";
import { createPublicClient, getContract, http } from "viem";
import { manta } from "viem/chains";

const client = createPublicClient({
  chain: manta,
  transport: http(),
});

export const cerc20Contract = getContract({
  address: "0x033F5e084a627cC420980ED9B1476C84A92FC5D4",
  abi: Cerc20Abi,
  client: client,
});
