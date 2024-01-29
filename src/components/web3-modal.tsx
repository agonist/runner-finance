"use client";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { cookieStorage, createStorage, State, WagmiProvider } from "wagmi";
import { arbitrum, Chain, mainnet, manta } from "wagmi/chains";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { siweConfig } from "@/lib/api/siwe";

const queryClient = new QueryClient();

const projectId = "a9207de79fd6005ea1469bcb5f5a44e4";

const chains: [Chain, ...Chain[]] = [manta];

const wagmiConfig = defaultWagmiConfig({
  chains: chains, // required

  projectId, // required
  metadata: {
    name: "Web3Modal",
    description: "Web3Modal Example",
    url: "http://localhost:3000/",
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
  enableCoinbase: false, // Optional - true by default
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeVariables: {
    "--w3m-accent": "#021E29",
  },
});

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
