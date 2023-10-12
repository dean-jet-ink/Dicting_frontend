import { Award, Lightbulb, PenLine } from "lucide-react";

import { Proficiency } from "../../types";
import { useState } from "react";

type ProficiencyProps = {
  proficiency: Proficiency;
  size?: "w-3" | "w-6";
};

const ProficiencyIcon = ({ proficiency, size = "w-3" }: ProficiencyProps) => {
  const [isOpen, setOpen] = useState(false);

  const baseAnnotationStyle =
    "absolute -top-7 bg-subAccent text-gray-100 text-xs px-2 py-1 rounded-sm";
  const invisible = `${baseAnnotationStyle} opacity-0`;
  const visible = `${baseAnnotationStyle} opacity-100`;

  const appliedStyle = isOpen ? visible : invisible;

  let mouseEnterTimer: NodeJS.Timeout;

  const onMouseEnterHandler = () => {
    mouseEnterTimer = setTimeout(() => {
      setOpen(true);
    }, 300);
  };

  const onMouseLeaveHandler = () => {
    clearTimeout(mouseEnterTimer);
    setOpen(false);
  };

  return (
    <div
      className="absolute top-1 left-1"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      // モバイル操作時
      onTouchStart={onMouseEnterHandler}
      onTouchEnd={onMouseLeaveHandler}
    >
      {proficiency === "Learning" ? (
        <PenLine className={`w-5 text-gray-500 ${size}`} />
      ) : proficiency === "Understand" ? (
        <Lightbulb className={`w-5 text-amber-500 ${size}`} />
      ) : (
        <Award className={`w-5 text-accent ${size}`} />
      )}
      <div className={appliedStyle}>{proficiency}</div>
    </div>
  );
};

export default ProficiencyIcon;
