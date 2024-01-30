"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TokenInput from "@/components/common/token-input";
import { Supply } from "./supply";
import { Borrow } from "./borrow";
import { Repay } from "./repay";
import { Withdraw } from "./withdraw";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const ActionsDialog: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] flex items-center justify-center justify-items-center">
          <Tabs
            defaultValue="supply"
            className="w-[600px] items-center flex flex-col"
          >
            <TabsList className="bg-card">
              <TabsTrigger value="supply">Supply</TabsTrigger>
              <TabsTrigger value="borrow">Borrow</TabsTrigger>
              <TabsTrigger value="repay">Repay</TabsTrigger>
              <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
            </TabsList>
            <TabsContent value="supply" className="w-full">
              <Supply />
            </TabsContent>
            <TabsContent value="borrow" className="w-full">
              <Borrow />
            </TabsContent>
            <TabsContent value="repay" className="w-full">
              <Repay />
            </TabsContent>
            <TabsContent value="withdraw" className="w-full">
              <Withdraw />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <Tabs
          defaultValue="supply"
          className="w-full items-center flex flex-col px-4 py-8"
        >
          <TabsList className="bg-card">
            <TabsTrigger value="supply">Supply</TabsTrigger>
            <TabsTrigger value="borrow">Borrow</TabsTrigger>
            <TabsTrigger value="repay">Repay</TabsTrigger>
            <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
          </TabsList>
          <TabsContent value="supply" className="w-full">
            <Supply />
          </TabsContent>
          <TabsContent value="borrow" className="w-full">
            <Borrow />
          </TabsContent>
          <TabsContent value="repay" className="w-full">
            <Repay />
          </TabsContent>
          <TabsContent value="withdraw" className="w-full">
            <Withdraw />
          </TabsContent>
        </Tabs>
      </DrawerContent>
    </Drawer>
  );
};

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
