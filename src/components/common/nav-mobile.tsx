import Link from "next/link";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import { IcArrowRight, IcBurger, IcClose } from "../ui/icons";
import { cfg } from "@/config";

export const NavMobile = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <IcBurger className="h-4 w-4" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className=" ml-32 flex flex-col  h-full  mt-24 ">
        <div className="flex h-16 justify-end m-4">
          <DrawerClose>
            <Button variant="outline" size="icon">
              <IcClose className="h-4 w-4" />
            </Button>
          </DrawerClose>
        </div>

        {cfg.menu.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="h-14 w-full border-b flex items-center px-4 justify-between"
          >
            {item.name}
            <IcArrowRight />
          </Link>
        ))}
      </DrawerContent>
    </Drawer>
  );
};
