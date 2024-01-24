import { MarketMetrics } from "@/components/metrics/market-metrics";
import ConnectWallet from "@/components/wallet/connect-wallet";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MarketMetrics borrows={100000} deposits={7866342} tvl={99988787} />
    </main>
  );
}
