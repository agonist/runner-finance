"use client";

import { useEffect, type ReactNode } from "react";
import { Provider, atom, useAtomValue } from "jotai";
import type { WritableAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { MarketItem } from "@/dummy";
import { useAccount } from "wagmi";

export type GlobalState = {
  priceFeed: Map<string, number>;
  market: MarketItem[];
};

export const marketAtom = atom<GlobalState>({
  priceFeed: new Map(),
  market: [],
});

type Props = {
  initialState: GlobalState;
  children: React.ReactNode;
};

export default function JotaiProviders({ initialState, children }: Props) {
  const account = useAccount();

  useEffect(() => {
    console.log(account);
  }, [account]);

  return (
    <Provider>
      {/* @ts-ignore */}
      <AtomsHydrator atomValues={[[marketAtom, initialState]]}>
        {children}
      </AtomsHydrator>
    </Provider>
  );
}

function AtomsHydrator({
  atomValues,
  children,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  atomValues: Iterable<
    readonly [WritableAtom<unknown, [any], unknown>, unknown]
  >;
  children: ReactNode;
}) {
  useHydrateAtoms(new Map(atomValues));
  return children;
}
