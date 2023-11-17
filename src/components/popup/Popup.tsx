import { ReactNode, useEffect, useState } from "react";

export type PopupProps = {
  content: ReactNode;
  isVisible: boolean;
  bg?: "bg-subAccent" | "bg-white";
};

const Popup = ({ content, isVisible, bg = "bg-subAccent" }: PopupProps) => {
  const [isOpen, setOpen] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>();

  const onMouseEnterHandler = () => {
    setTimer(
      setTimeout(() => {
        setOpen(true);
      }, 500)
    );
  };

  const onMouseLeaveHandler = () => {
    clearTimeout(timer);
    setTimer(undefined);
    setOpen(false);
  };

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  useEffect(() => {
    if (isVisible) {
      onMouseEnterHandler();
    } else {
      onMouseLeaveHandler();
    }
  }, [isVisible]);

  const basePopupStyle = `${bg} px-2 py-1 rounded-sm transition-all duration-300`;
  const invisible = `${basePopupStyle} opacity-0 pointer-events-none`;
  const visible = `${basePopupStyle} opacity-100`;

  return <div className={isOpen ? visible : invisible}>{content}</div>;
};

export default Popup;
