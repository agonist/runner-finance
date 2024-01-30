"use client";

import { InfosLabel } from "@/components/common/info-label";
import TokenInput from "@/components/common/token-input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export const Withdraw = () => {
  const [value, setValue] = useState<number>(0.0);

  return (
    <div className="flex flex-col space-y-4 py-4">
      <TokenInput icon="eth" max={12.3} value={value} setValue={setValue} />

      <Card className="flex flex-col p-4 space-y-4 ">
        <InfosLabel label="Max Withdrawal" value={"0.00 STONE"} />
        <InfosLabel label="Amount Supplied" value={"2.00 STONE"} />
        <InfosLabel label="Borrow Limit Change" value={"43% -> 24%"} />
        <InfosLabel label="Borrow Utilization" value={"43% -> 24%"} />
      </Card>
      <Button className="">Withdraw</Button>
    </div>
  );
};
