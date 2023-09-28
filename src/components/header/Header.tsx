import { ReactNode } from "react";

import Title from "@/components/title/Title";

export type HeaderProps = {
  children?: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="fixed items-center top-0 left-0 right-0 h-14 bg-main px-10 py-4">
      {children}
    </div>
  );
};

export default Header;
