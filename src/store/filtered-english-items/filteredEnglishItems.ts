import { EnglishItemInfo, EnglishItems } from "@/features/english/types";
import queryClient from "@/lib/react_query";
import { create } from "zustand";
import { Proficiency } from "../proficiency/proficiency";

type FilterParams = {
  word: string;
  proficiency: Proficiency;
};

type FilteredEnglishItemsStore = {
  filteredEnglishItems: EnglishItemInfo[];
  setFilteredEnglishItems: (params: FilterParams) => void;
};

const useFilteredEnglishItemsStore = create<FilteredEnglishItemsStore>(
  (set) => ({
    filteredEnglishItems: [],
    setFilteredEnglishItems: (params) => {
      const englishItems: EnglishItems | undefined = queryClient.getQueryData([
        "englishItems",
      ]);

      if (englishItems) {
        const englishItemInfos = englishItems.english_items;

        const filteredEnglishItems = englishItemInfos.filter((englishItem) => {
          const word = englishItem.content
            .toLowerCase()
            .includes(params.word.toLowerCase());
          const proficiency =
            params.proficiency === "All" ||
            englishItem.proficiency === params.proficiency;

          return word && proficiency;
        });

        set({ filteredEnglishItems });
      }
    },
  })
);

export default useFilteredEnglishItemsStore;
