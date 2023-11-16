import Loading from "@/components/loading/Loading";
import Popup from "@/components/popup/Popup";
import { BrainCircuit } from "lucide-react";
import { useEffect, useState } from "react";

type AIIconProps = {
  submit: () => void;
  isLoading: boolean;
};

const AIIcon = ({ submit, isLoading }: AIIconProps) => {
  const [isHover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const onClickSubmit = () => {
    onLeave();
    submit();
  };

  return isLoading ? (
    <Loading bg="bg-gray-600" variant="xs" />
  ) : (
    <div className="relative">
      <BrainCircuit
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        // モバイル操作時
        onTouchStart={onHover}
        onTouchEnd={onLeave}
        size={22}
        className="cursor-pointer text-gray-500"
        onClick={onClickSubmit}
      />
      <div className="absolute -top-6 -left-8">
        <Popup
          isVisible={isHover}
          content={<p className="w-max text-xs text-gray-100">AI自動生成</p>}
        />
      </div>
    </div>
  );
};

export default AIIcon;
