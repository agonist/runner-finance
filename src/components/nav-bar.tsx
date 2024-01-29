import ConnectWallet from "./wallet/connect-wallet";
import Link from "next/link";
import { cfg } from "@/config";
import { NavMobile } from "./common/nav-mobile";
import { NavLink } from "./nav-link";

export const NavBar = () => {
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <div className="flex-shrink-0">Runner</div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {/* Main Nav Links Here */}
                {cfg.menu.map((item) => (
                  <NavLink name={item.name} path={item.path} key={item.name} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <ConnectWallet />
          </div>
          <div className="md:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </nav>
  );
};
