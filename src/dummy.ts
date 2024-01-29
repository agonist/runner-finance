export type MarketItem = {
  icon: string;
  name: string;
  currentPrice: number;
  totalSupply: number;
  totalSupplyUsd: number;
  supplyBalance: number;
  supplyBalanceUsd: number;
  supplyAPY: number;
  totalBorrow: number;
  totalBorrowUsd: number;
  borrowBalance: number;
  borrowBalanceUsd: number;
  borrowAPY: number;
};

export const dummy: { market: MarketItem[] } = {
  market: [
    {
      icon: "stone",
      name: "STONE",
      currentPrice: 2276.43,
      totalSupply: 3099,
      totalSupplyUsd: 70543999,
      supplyBalance: 1.1,
      supplyBalanceUsd: 2348.4,
      supplyAPY: 4.65,
      totalBorrow: 9870,
      totalBorrowUsd: 22_323_422,
      borrowBalance: 0.7,
      borrowBalanceUsd: 1348.4,
      borrowAPY: -1.65,
    },
    {
      icon: "eth",
      name: "ETH",
      currentPrice: 2376.43,
      totalSupply: 309.99,
      totalSupplyUsd: 7543999,
      supplyBalance: 3.1,
      supplyBalanceUsd: 6348.4,
      supplyAPY: 3.65,
      totalBorrow: 1870,
      totalBorrowUsd: 12_323_422,
      borrowBalance: 0.1,
      borrowBalanceUsd: 348.4,
      borrowAPY: -2.65,
    },
  ],
};
