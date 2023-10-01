export type SearchedWord = {
  searchedWord: string;
};

export type Proficiency = "Learning" | "Understand" | "Mastered";

export type EnglishItem = {
  id: string;
  content: string;
  translation: string;
  enExplanation: string;
  image: string;
  proficiency: Proficiency;
};
