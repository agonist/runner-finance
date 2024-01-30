"use client";

import { InfosLabel } from "@/components/common/info-label";
import TokenInput from "@/components/common/token-input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export const Borrow = () => {
  const [value, setValue] = useState<number>(0.0);

  return (
    <div className="flex flex-col space-y-4 py-4">
      <TokenInput icon="eth" max={12.3} value={value} setValue={setValue} />

      <Card className="flex flex-col p-4 space-y-4 ">
        <InfosLabel label="Amount Borrowed" value={"0.00 STONE"} />
        <InfosLabel label="Borrow Limit Change" value={"$ 443.2% -> $ 2.07k"} />
        <InfosLabel label="Borrow utilization" value={"43% -> 24%"} />
        <InfosLabel label="Borrow APY" value={"-2.5%"} />
      </Card>
      <Button className="">Borrow</Button>
    </div>
  );
};
