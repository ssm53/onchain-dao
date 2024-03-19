import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { createConfig, WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";

const { connectors } = getDefaultWallets({
  appName: "CryptoDevs DAO",
  projectId: "6ac21ee292826c2af6047b3e43e14054",
});

const config = createConfig({
  chains: [sepolia],
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
