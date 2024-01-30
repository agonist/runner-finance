"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

type Props = {
  icon: string;
  max: number;
  value: number;
  setValue: (value: number) => void;
};

const TokenInput: React.FC<Props> = ({ icon, max, value, setValue }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.valueAsNumber;

    setValue(inputValue);
  };

  const handleMaxButtonClick = () => {
    setValue(max);
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <div className="flex justify-end  ">
            <Image
              src={`/assets/tokens/${icon}.png`}
              width={24}
              height={24}
              alt="ic"
            />
          </div>
        </span>
        <Input
          type="number"
          className="block w-full h-14 pl-12 pr-12 py-2 border focus:ring focus:ring-accent-foreground focus:outline-none focus:border-accent-foreground rounded-xl"
          placeholder="0.00"
          value={value}
          onChange={handleChange}
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <Button
            onClick={handleMaxButtonClick}
            className="bg-secondary hover:bg-secondary/90"
          >
            Max
          </Button>
        </span>
      </div>
      <div className="flex justify-between px-4">
        <p className="text-muted-foreground text-xs">= $0.0</p>
        <p className="text-muted-foreground text-xs">Max: 0.00 STONE</p>
      </div>
    </div>
  );
};

export default TokenInput;
