import ConnectWallet from "./wallet/connect-wallet";

export const NavBar = () => {
  return (
    <nav className="w-full h-12 flex justify-end items-center px-4">
      <ConnectWallet />
    </nav>
  );
};
