"use client";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { cookieStorage, createStorage, State, WagmiProvider } from "wagmi";
import { arbitrum, Chain, mainnet } from "wagmi/chains";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

const projectId = "a9207de79fd6005ea1469bcb5f5a44e4";

const chains: [Chain, ...Chain[]] = [mainnet, arbitrum];

const wagmiConfig = defaultWagmiConfig({
  chains: chains, // required
  projectId, // required
  metadata: {
    name: "Web3Modal",
    description: "Web3Modal Example",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
    verifyUrl: "",
  }, // required
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
});

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export function Web3Modal({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
