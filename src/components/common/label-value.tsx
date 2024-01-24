import { MutedLabel } from "./typography";
import { formatNumber } from "@/lib/format";
import { DEFAULT_CURRENCY_SIGN, DEFAULT_DECIMAL } from "@/lib/const";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva("flex flex-col", {
  variants: {
    variant: {
      default: "items-center",
      left: "items-start",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
type ContainerProps = VariantProps<typeof containerVariants>;

const valueVariants = cva("font-medium text-foreground", {
  variants: {
    size: {
      default: "text-3xl",
      compact: "text-2xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
type ValueProps = VariantProps<typeof valueVariants>;

interface Props extends ContainerProps, ValueProps {
  label: string;
  value: number;
  currencySign?: string;
  decimalPlaces?: number;
}

export const LabelValue: React.FC<Props> = ({
  label,
  value,
  currencySign = DEFAULT_CURRENCY_SIGN,
  decimalPlaces = DEFAULT_DECIMAL,
  variant,
  size,
}) => {
  return (
    <div className={cn(containerVariants({ variant }))}>
      <MutedLabel>{label}</MutedLabel>

      <p className={cn(valueVariants({ size }))}>
        {currencySign}
        {formatNumber(value, decimalPlaces)}
      </p>
    </div>
  );
};
