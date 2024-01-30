"use client";

import { InfosLabel } from "@/components/common/info-label";
import TokenInput from "@/components/common/token-input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export const Supply = () => {
  const [value, setValue] = useState<number>(0.0);

  return (
    <div className="flex flex-col space-y-4 py-4">
      <TokenInput icon="eth" max={12.3} value={value} setValue={setValue} />

      <Card className="flex flex-col p-4 space-y-4 ">
        <InfosLabel label="Supply APY" value={"4.65%"} />
        <InfosLabel label="Amount Supplied" value={"0.3 STONE"} />
        <InfosLabel label="Borrow utilization" value={"43%"} />
        <InfosLabel
          label="Available Borrow Power"
          value={"$ 443.2% -> $ 2.07k"}
        />
      </Card>
      <Button className="">Supply</Button>
    </div>
  );
};
