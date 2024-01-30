"use client";

import { H2 } from "@/components/common/typography";
import { marketAtom } from "@/components/jotai-provider";
import { MarketMetrics } from "@/components/metrics/market-metrics";
import { MarketTable } from "@/components/metrics/market-table";
import { columns } from "@/components/metrics/table/colums";
import { PageRoot } from "@/components/page-root";
import { PageSection } from "@/components/page-section";
import { calculateMarketMetrics } from "@/lib/protocol";
import { useAtom } from "jotai";

export default function MarketClient() {
  const [market, _] = useAtom(marketAtom);

  return (
    <PageRoot>
      <PageSection className={"space-y-4"}>
        <H2 className="text-accent-foreground">Protocol stats</H2>
        <MarketMetrics stats={calculateMarketMetrics(market.market)} />
      </PageSection>

      <PageSection className={"space-y-4"}>
        <H2 className="text-accent-foreground">Market</H2>
        <MarketTable columns={columns} data={market.market} />
      </PageSection>
    </PageRoot>
  );
}
