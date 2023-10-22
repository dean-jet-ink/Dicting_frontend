import { X } from "lucide-react";
import { ReactNode } from "react";

export type SideMenuProps = {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
  side?: "right" | "left";
  size?: "sm" | "md";
};

const SideMenu = ({
  isOpen,
  close,
  children,
  side = "right",
  size = "md",
}: SideMenuProps) => {
  const baseStyle =
    "fixed inset-0 transition-all duration-200 flex justify-center items-center";
  const openStyle = `${baseStyle} z-50 opacity-100 pointer-events-auto`;
  const closeStyle = `${baseStyle} -z-50 opacity-0 pointer-events-none`;

  const baseContentStyle = `h-screen ${
    size === "md" ? "lg:w-harf-screen md:w-screen" : "w-80"
  } p-6 pb-20 bg-main shadow-blur absolute z-50 top-0 ${
    side === "right" ? "right-0" : "left-0 rounded-md"
  } transition-all duration-300 overflow-x-hidden overflow-y-auto`;
  const openContentStyle = `${baseContentStyle} opacity-100`;
  const closeContentStyle = `${baseContentStyle} opacity-0 ${
    side === "right" ? "translate-x-100vh" : "-translate-x-100vh"
  }`;

  const baseMaskStyle = "absolute inset-0 z-40";
  const openMaskStyle = `${baseMaskStyle}`;
  const closeMaskStyle = `${baseMaskStyle} hidden`;

  return (
    <div className={isOpen ? openStyle : closeStyle}>
      <div className={isOpen ? openContentStyle : closeContentStyle}>
        <div className="w-full">
          <X className="text-gray-400 ml-auto cursor-pointer" onClick={close} />
        </div>
        {children}
      </div>
      <div
        className={isOpen ? openMaskStyle : closeMaskStyle}
        onClick={close}
      ></div>
    </div>
  );
};

export default SideMenu;
