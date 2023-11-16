import { Trash2 } from "lucide-react";

type DeleteIconProps = {
  remove: () => void;
};

const DeleteIcon = ({ remove }: DeleteIconProps) => {
  return (
    <Trash2
      size={22}
      className="cursor-pointer text-gray-500"
      onClick={remove}
    />
  );
};

export default DeleteIcon;
