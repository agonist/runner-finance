export const formatNumber = (num: number, decimalPlaces: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(decimalPlaces) + "B";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(decimalPlaces) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(decimalPlaces) + "K";
  }
  return num.toFixed(decimalPlaces);
};
