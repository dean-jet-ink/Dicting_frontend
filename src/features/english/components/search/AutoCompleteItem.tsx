import { useState } from "react";

type AutoCompleteItemProps = {
  content: string;
  selected: boolean;
  onClickItem: (word: string) => void;
};

const AutoCompleteItem = ({
  content,
  selected,
  onClickItem,
}: AutoCompleteItemProps) => {
  const baseRowStyle = "pl-11 pr-2 py-2";
  const selectedStyle = `${baseRowStyle} bg-gray-100`;
  const unselectedStyle = `${baseRowStyle} bg-inherit`;

  const [isHover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className={selected || isHover ? selectedStyle : unselectedStyle}
      onMouseEnter={onHover}
      onMouseLeave={onMouseLeave}
      onClick={() => onClickItem(content)}
    >
      {content}
    </div>
  );
};

export default AutoCompleteItem;
