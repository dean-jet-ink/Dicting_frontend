import { ReactNode } from "react";

import Title from "@/components/title/Title";

export type HeaderProps = {
  children?: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 px-10 py-4">
      <div className="flex items-center h-14">{children}</div>
    </header>
  );
};

export default Header;
