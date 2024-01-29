"use client";

import { MarketItem } from "@/dummy";
import { formatNumber } from "@/lib/format";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";

export const columns: ColumnDef<MarketItem>[] = [
  {
    accessorKey: "icon",
    header: ({ column }) => <></>,
    cell: ({ row }) => (
      <div className="flex justify-end  ">
        <Image
          src={`/assets/tokens/${row.getValue("icon")}.png`}
          width={32}
          height={32}
          alt="ic"
        />
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => <p>Token</p>,
    cell: ({ row }) => (
      <div className="w-[80px] h-16 flex flex-col justify-center ">
        <p className="">{row.getValue("name")}</p>
        <p className="text-muted-foreground">
          ${formatNumber(row.original.totalSupplyUsd, 2)}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "totalSupply",
    header: ({ column }) => <p>Total Supply</p>,
    cell: ({ row }) => (
      <div className="w-[80px] h-16 flex flex-col justify-center ">
        <p className="">{formatNumber(row.getValue("totalSupply"), 2)}</p>
        <p className="text-muted-foreground">
          ${formatNumber(row.original.totalSupplyUsd, 2)}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "supplyBalance",
    header: ({ column }) => <p>Supply Balance</p>,
    cell: ({ row }) => (
      <div className="w-[80px] h-16 flex flex-col justify-center">
        <p className="">{formatNumber(row.getValue("supplyBalance"), 2)}</p>
        <p className="text-muted-foreground">
          ${formatNumber(row.original.supplyBalanceUsd, 2)}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "supplyAPY",
    header: ({ column }) => <p>Supply APY</p>,
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("supplyAPY")}%</div>
    ),
  },
  {
    accessorKey: "totalBorrow",
    header: ({ column }) => <p>Total Borrow</p>,
    cell: ({ row }) => (
      <div className="w-[80px] h-16 flex flex-col justify-center">
        <p className="">{formatNumber(row.getValue("totalBorrow"), 2)}</p>
        <p className="text-muted-foreground">
          ${formatNumber(row.original.totalBorrowUsd, 2)}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "borrowBalance",
    header: ({ column }) => <p>Borrow Balance</p>,
    cell: ({ row }) => (
      <div className="w-[80px] h-16 flex flex-col justify-center">
        <p className="">{formatNumber(row.getValue("borrowBalance"), 2)}</p>
        <p className="text-muted-foreground">
          ${formatNumber(row.original.borrowBalanceUsd, 2)}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "borrowAPY",
    header: ({ column }) => <p>Borrow APY</p>,
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("borrowAPY")}%</div>
    ),
  },
];
