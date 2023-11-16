import { Plus } from "lucide-react";

type PlusButtonProps = {
  plusFn: () => void;
};

const PlusButton = ({ plusFn }: PlusButtonProps) => {
  return <Plus onClick={plusFn} className="cursor-pointer" />;
};

export default PlusButton;
