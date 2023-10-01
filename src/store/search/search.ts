import { create } from "zustand";

type SearchStore = {
  searchedWord: string;
  setSearchedWord: (word: string) => void;
};

const useSearch = create<SearchStore>((set) => ({
  searchedWord: "",
  setSearchedWord: (word) => {
    set({ searchedWord: word });
  },
}));

export default useSearch;
