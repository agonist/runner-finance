import { MarketItem } from "@/dummy";
import { ProtocolStats } from "@/types/market";

export function calculateMarketMetrics(items: MarketItem[]): ProtocolStats {
  const totalSums = items.reduce(
    (sums, item) => {
      sums.totalSupplied += item.totalSupplyUsd;
      sums.totalBorrowed += item.totalBorrowUsd;
      return sums;
    },
    { totalSupplied: 0, totalBorrowed: 0 }
  );

  return {
    ...totalSums,
    totalSize: totalSums.totalSupplied + totalSums.totalBorrowed,
  };
}
