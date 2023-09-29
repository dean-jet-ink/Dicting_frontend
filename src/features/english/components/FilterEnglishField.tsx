import { ChangeEvent } from "react";

import Select, { Option } from "../../../components/form/Select";
import { useFilter } from "../../../store/filter/filter";
import { FilterType } from "../../../store/filter/filter";

const FilterEnglishField = () => {
  const { filterType, setFilterType } = useFilter();

  const filterTypes: FilterType[] = [
    "All",
    "Learning",
    "Understand",
    "Masetered",
  ];

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value as FilterType);
  };

  const options: Option[] = filterTypes.map((filterType) => {
    return {
      label: filterType,
      value: filterType,
      selected: filterType === "All",
    };
  });

  return (
    <Select value={filterType} options={options} onChange={onChangeHandler} />
  );
};

export default FilterEnglishField;
