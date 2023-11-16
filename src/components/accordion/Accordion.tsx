import { ReactNode, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionProps = {
  overview: ReactNode;
  detail: ReactNode;
};

const Accordion = ({ overview, detail }: AccordionProps) => {
  const [isOpen, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const detailElement = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    if (detailElement.current) {
      const detailHeight = detailElement.current.clientHeight;
      setHeight(detailHeight);
      setOpen(!isOpen);
    }
  };

  return (
    <div className="w-full">
      <div
        className="flex items-center justify-between gap-2 cursor-pointer mb-5"
        onClick={toggleAccordion}
      >
        <div style={{ flex: "93%" }}>{overview}</div>
        <ChevronDown
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            flex: "7%",
          }}
          className="transition-all duration-200"
        />
      </div>
      <div
        style={{
          height: isOpen ? `${height}px` : "0",
          opacity: isOpen ? 100 : 0,
          marginBottom: isOpen ? "20px" : "0",
        }}
        className="transition-all duration-200"
      >
        <div ref={detailElement}>{detail}</div>
      </div>
    </div>
  );
};

export default Accordion;
