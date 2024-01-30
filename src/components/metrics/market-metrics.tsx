import { ProtocolStats } from "@/types/market";
import { LabelValue } from "../common/label-value";

type Props = {
  stats: ProtocolStats;
};

export const MarketMetrics: React.FC<Props> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <div className="bg-card p-6 border rounded-xl">
        <LabelValue label="TVL" value={stats.totalSize} variant={"left"} />
      </div>
      <div className="bg-card p-6 border rounded-xl">
        <LabelValue
          label="Total Supplied"
          value={stats.totalSupplied}
          variant={"left"}
        />
      </div>
      <div className="bg-card p-6 border rounded-xl">
        <LabelValue
          label="Total Borrowed"
          value={stats.totalBorrowed}
          variant={"left"}
        />
      </div>
    </div>
  );
};
