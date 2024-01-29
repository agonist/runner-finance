"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  path: string;
};

export const NavLink: React.FC<Props> = ({ name, path }) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={cn(
        "font-medium",
        pathname === path
          ? "text-cyan-500"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {name}
    </Link>
  );
};
