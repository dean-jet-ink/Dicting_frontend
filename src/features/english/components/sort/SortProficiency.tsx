import { ChangeEvent, useRef, useState } from "react";

import Select, { Option } from "../../../../components/form/Select";
import { useProficiency } from "../../../../store/proficiency/proficiency";
import { Proficiency } from "../../../../store/proficiency/proficiency";
import useFilteredEnglishItemsStore from "@/store/filtered-english-items/filteredEnglishItems";
import useSearch from "@/store/search/search";
import { Filter } from "lucide-react";

const SortProficiency = () => {
  const { proficiency, setProficiency } = useProficiency();

  const { searchedWord } = useSearch();

  const { setFilteredEnglishItems } = useFilteredEnglishItemsStore();

  const proficiencies: Proficiency[] = [
    "All",
    "Learning",
    "Understand",
    "Mastered",
  ];

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setProficiency(e.target.value as Proficiency);

    setFilteredEnglishItems({
      word: searchedWord,
      proficiency: e.target.value as Proficiency,
    });
  };

  const options: Option[] = proficiencies.map((proficiency) => {
    return {
      label: proficiency,
      value: proficiency,
      selected: proficiency === "All",
    };
  });

  const [isOpen, setOpen] = useState(false);

  const openPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  const [selectedProficiency, setSelectedProficiency] =
    useState<Proficiency>(proficiency);

  const onClickHandler = (proficiency: Proficiency) => {
    setSelectedProficiency(proficiency);

    setProficiency(proficiency);

    setFilteredEnglishItems({
      word: searchedWord,
      proficiency: proficiency,
    });

    closePopup();
  };

  return (
    <div>
      <div className="md:hidden relative">
        <Filter
          className={`cursor-pointer ${
            selectedProficiency === "All" ? "text-gray-500" : "text-accent"
          }`}
          onClick={openPopup}
        />
        <div
          className={`${isOpen ? "block" : "hidden"} fixed inset-0`}
          onClick={closePopup}
        ></div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } bg-sub rounded-sm absolute z-50 top-8 w-48`}
        >
          {proficiencies.map((proficiency) => {
            return (
              <li
                key={proficiency}
                className={`py-2 px-4 ${
                  proficiency === selectedProficiency ? "bg-gray-300" : ""
                }`}
                onClick={() => onClickHandler(proficiency)}
              >
                {proficiency}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden md:block">
        <Select
          value={proficiency}
          options={options}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default SortProficiency;
