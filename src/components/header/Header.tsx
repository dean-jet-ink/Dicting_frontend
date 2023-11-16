import { ReactNode } from "react";

import Title from "@/components/title/Title";

export type HeaderProps = {
  children?: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="bg-main fixed top-0 left-0 right-0 z-50 py-4 px-7">
      <div className="flex items-center h-14 max-w-7xl m-auto">{children}</div>
    </header>
  );
};

export default Header;
