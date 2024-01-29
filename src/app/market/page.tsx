import { H2 } from "@/components/common/typography";
import { MarketMetrics } from "@/components/metrics/market-metrics";
import { PageRoot } from "@/components/page-root";
import { PageSection } from "@/components/page-section";
import { getMarketData } from "@/lib/api/market";

export default async function Market() {
  const market = await getMarketData();

  return (
    <PageRoot>
      <PageSection className={"space-y-4"}>
        <H2 className="text-accent-foreground">Protocol stats</H2>
        <MarketMetrics borrows={100000} deposits={7866342} tvl={99988787} />
      </PageSection>
      <p>{Number(market.totalSupply)}</p>
    </PageRoot>
  );
}
