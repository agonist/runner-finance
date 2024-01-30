import { cookieStorage, createStorage } from "wagmi";
import { Chain, manta } from "wagmi/chains";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

export const projectId = "a9207de79fd6005ea1469bcb5f5a44e4";

export const chains: [Chain, ...Chain[]] = [manta];

export const wagmiConfig = defaultWagmiConfig({
  chains: chains,

  projectId,
  metadata: {
    name: "Web3Modal",
    description: "Web3Modal Example",
    url: "http://localhost:3000/",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: false, // Optional - true by default
});
