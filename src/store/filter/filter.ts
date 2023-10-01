import { create } from "zustand";

export type FilterType = "All" | "Learning" | "Understand" | "Masetered";

type FilterStore = {
  filterType: FilterType;
  setFilterType: (filterType: FilterType) => void;
};

const useFilter = create<FilterStore>((set) => ({
  filterType: "All",
  setFilterType: (filterType) => {
    set({ filterType });
  },
}));

export { useFilter };
