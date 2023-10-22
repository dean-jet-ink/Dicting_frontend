import { Trash } from "lucide-react";

type DeleteIconProps = {
  remove: () => void;
};

const DeleteIcon = ({ remove }: DeleteIconProps) => {
  return (
    <Trash
      size={22}
      className="cursor-pointer text-gray-500"
      onClick={remove}
    />
  );
};

export default DeleteIcon;
