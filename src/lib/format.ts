
export const formatNumber = (num: number, decimalPlaces: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(decimalPlaces) + "b";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(decimalPlaces) + "m";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(decimalPlaces) + "k";
  }
  return num.toFixed(decimalPlaces);
};
