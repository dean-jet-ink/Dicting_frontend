import { X } from "lucide-react";
import { ReactNode } from "react";

export type ModalProps = {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, close, children }: ModalProps) => {
  const baseModalStyle =
    "fixed top-0 bottom-0 left-0 right-0 p-4  md:inset-0 transition-all duration-200 flex justify-center items-center";
  const openStyle = `${baseModalStyle} z-50 opacity-100 pointer-events-auto`;
  const closeStyle = `${baseModalStyle} -z-50 opacity-0 pointer-events-none`;

  const appliedStyle = isOpen ? openStyle : closeStyle;

  return (
    <div className={appliedStyle}>
      <div
        className="w-full h-full bg-black absolute z-40 opacity-50"
        onClick={close}
      ></div>
      <div className="max-h-custom max-w-3xl bg-main p-6 rounded-sm absolute z-50 overflow-x-hidden overflow-y-auto">
        <div className="w-full">
          <X className="text-gray-400 ml-auto cursor-pointer" onClick={close} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
