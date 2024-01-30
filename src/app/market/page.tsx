import { H2 } from "@/components/common/typography";
import { MarketMetrics } from "@/components/metrics/market-metrics";
import { MarketTable } from "@/components/metrics/market-table";
import { columns } from "@/components/metrics/table/colums";
import { PageRoot } from "@/components/page-root";
import { PageSection } from "@/components/page-section";
import { dummy } from "@/dummy";
import { getMarket, getMarketData } from "@/lib/api/market";

export default async function Market() {
  const market = await getMarket();

  return (
    <PageRoot>
      <PageSection className={"space-y-4"}>
        <H2 className="text-accent-foreground">Protocol stats</H2>
        <MarketMetrics borrows={100000} deposits={7866342} tvl={99988787} />
      </PageSection>

      <PageSection className={"space-y-4"}>
        <H2 className="text-accent-foreground">Market</H2>
        <MarketTable columns={columns} data={market} />
      </PageSection>
    </PageRoot>
  );
}
