import { X } from "lucide-react";
import { ReactNode } from "react";

export type ModalProps = {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
  bg?: "bg-sub" | "bg-transparent";
  isMask?: boolean;
  zIndex?:
    | "z-10"
    | "z-20"
    | "z-30"
    | "z-40"
    | "z-50"
    | "z-[60]"
    | "z-[70]"
    | "z-[80]"
    | "z-[90]"
    | "z-[100]"
    | "z-[1000]";
};

const Modal = ({
  isOpen,
  close,
  children,
  bg = "bg-sub",
  isMask = true,
  zIndex = "z-50",
}: ModalProps) => {
  const baseModalStyle =
    "fixed inset-0 transition-all duration-200 flex justify-center items-center";
  const openStyle = `${baseModalStyle} ${zIndex} opacity-100 pointer-events-auto`;
  const closeStyle = `${baseModalStyle} -z-50 opacity-0 pointer-events-none`;

  return (
    <div className={isOpen ? openStyle : closeStyle}>
      <div
        className={`w-full h-full ${
          isMask ? "bg-black" : "bg-transparent"
        } absolute z-40 opacity-50`}
        onClick={close}
      ></div>
      <div
        className={`max-h-custom w-screen sm:w-auto ${bg} p-6 sm:p-14 rounded-sm absolute z-50 overflow-x-hidden overscroll-contain`}
      >
        {bg === "bg-sub" && (
          <div className="w-full">
            <X
              className="text-gray-400 ml-auto cursor-pointer"
              onClick={close}
            />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
