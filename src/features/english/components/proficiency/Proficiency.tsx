import { Award, Lightbulb, PenLine, Sprout } from "lucide-react";

import { Proficiency } from "../../types";
import { useState } from "react";
import Popup from "@/components/popup/Popup";

type ProficiencyProps = {
  proficiency: Proficiency;
};

const ProficiencyIcon = ({ proficiency }: ProficiencyProps) => {
  const [isHover, setHover] = useState(false);

  const onMouseEnterHandler = () => {
    setHover(true);
  };

  const onMouseLeaveHandler = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      // モバイル操作時
      onTouchStart={onMouseEnterHandler}
      onTouchEnd={onMouseLeaveHandler}
      className="relative"
    >
      {proficiency === "Learning" ? (
        <Sprout size={48} strokeWidth={1.3} className="text-gray-500" />
      ) : proficiency === "Understand" ? (
        <Lightbulb size={48} strokeWidth={1.3} className="text-text-gray-500" />
      ) : (
        <Award size={48} strokeWidth={1.3} className="text-gray-500" />
      )}
      <div className="absolute top-12 -left-3">
        <Popup
          isHover={isHover}
          content={<p className="text-xs text-gray-100">{proficiency}</p>}
        />
      </div>
    </div>
  );
};

export default ProficiencyIcon;
