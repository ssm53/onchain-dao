'use client'
import "@rainbow-me/rainbowkit/styles.css";
import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const { wallets } = getDefaultWallets();

const config = getDefaultConfig({
    appName: 'RainbowKit demo',
    projectId: 'YOUR_PROJECT_ID',
    wallets: [
      ...wallets,
      {
        groupName: 'Other',
        wallets: [argentWallet, trustWallet, ledgerWallet],
      },
    ],
    chains: [
        sepolia
    ],
    ssr: true,
  });

const queryClient = new QueryClient();

export function Providers({ children }) {
  return (
    <WagmiProvider  config={config}>
      <QueryClientProvider client={queryClient} >
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
