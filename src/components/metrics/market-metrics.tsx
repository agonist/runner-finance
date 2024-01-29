import { LabelValue } from "../common/label-value";
import { Separator } from "../ui/separator";

type Props = {
  tvl: number;
  deposits: number;
  borrows: number;
};

export const MarketMetrics: React.FC<Props> = ({ tvl, borrows, deposits }) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <div className="bg-card p-4">
        <LabelValue label="TVL" value={tvl} variant={"left"} />
      </div>
      <div className="bg-card p-4">
        <LabelValue label="Total Supplied" value={deposits} variant={"left"} />
      </div>
      <div className="bg-card p-4">
        <LabelValue label="Total Borrowed" value={borrows} variant={"left"} />
      </div>
    </div>
  );
};
