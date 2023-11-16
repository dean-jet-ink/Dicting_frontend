import { create } from "zustand";

export type Proficiency = "All" | "Learning" | "Understand" | "Mastered";

type ProficiencyStore = {
  proficiency: Proficiency;
  setProficiency: (proficiency: Proficiency) => void;
};

const useProficiency = create<ProficiencyStore>((set) => ({
  proficiency: "All",
  setProficiency: (proficiency) => {
    set({ proficiency });
  },
}));

export { useProficiency };
