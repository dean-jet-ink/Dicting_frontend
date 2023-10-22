import { ReactNode, useEffect, useState } from "react";

export type PopupProps = {
  content: ReactNode;
  isHover: boolean;
};

const Popup = ({ content, isHover }: PopupProps) => {
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

  useEffect(() => {
    if (isHover) {
      onMouseEnterHandler();
    } else {
      onMouseLeaveHandler();
    }
  }, [isHover]);

  const baseAnnotationStyle =
    "relative bg-subAccent px-2 py-1 rounded-sm transition-all duration-300";
  const invisible = `${baseAnnotationStyle} opacity-0 pointer-events-none`;
  const visible = `${baseAnnotationStyle} opacity-100`;

  return <div className={isOpen ? visible : invisible}>{content}</div>;
};

export default Popup;
