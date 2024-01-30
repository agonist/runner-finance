"use client";

import { createWeb3Modal } from "@web3modal/wagmi/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { wagmiConfig, projectId } from "@/lib/config/wagmi";
import { State, WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig,
  projectId,

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
