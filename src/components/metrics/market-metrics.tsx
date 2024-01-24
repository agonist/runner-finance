import { LabelValue } from "../common/label-value";
import { Separator } from "../ui/separator";

type Props = {
  tvl: number;
  deposits: number;
  borrows: number;
};

export const MarketMetrics: React.FC<Props> = ({ tvl, borrows, deposits }) => {
  return (
    <div className="flex space-x-8 border border-1 p-4 rounded-sm">
      <LabelValue label="TVL" value={tvl} />
      <Separator orientation="vertical" className="h-auto" />
      <LabelValue label="Total deposits" value={deposits} />
      <Separator orientation="vertical" className="h-auto" />
      <LabelValue label="Total borrows" value={borrows} />
    </div>
  );
};
