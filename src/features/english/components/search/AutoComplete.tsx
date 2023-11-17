import { useState } from "react";
import AutoCompleteItem from "./AutoCompleteItem";

type AutoCompleteProps = {
  autoComplete: string[];
  selectedRow: number;
  onClickItem: (word: string) => void;
};

const AutoComplete = ({
  autoComplete,
  selectedRow,
  onClickItem,
}: AutoCompleteProps) => {
  return (
    autoComplete.length !== 0 && (
      <div className="overflow-x-hidden">
        {autoComplete.map((content, index) => {
          return (
            <AutoCompleteItem
              key={content}
              content={content}
              selected={selectedRow === index}
              onClickItem={onClickItem}
            />
          );
        })}
      </div>
    )
  );
};

export default AutoComplete;
