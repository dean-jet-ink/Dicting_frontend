export type EnglishContent = {
  content: string;
};

export type Proficiency = "Learning" | "Understand" | "Mastered";

export type Example = {
  id?: string;
  example: string;
  translation: string;
};

export type Img = {
  id?: string;
  url: string;
  is_thumbnail: boolean;
};

export type EnglishItem = {
  id: string;
  content: string;
  translations: string[];
  en_explanation: string;
  examples: Example[];
  imgs: Img[];
  proficiency: Proficiency;
  exp: number;
};

export type EnglishItemInfo = Omit<EnglishItem, "examples" | "imgs"> & {
  img: string;
};

export type EnglishItems = {
  english_items: EnglishItemInfo[];
};

export type Proposal = Omit<
  EnglishItem,
  "id" | "examples" | "imgs" | "proficiency" | "exp"
> & { examples: Omit<Example, "id">[] };

export type Translation = {
  translation: string;
};

export type EnglishItemForm = Omit<EnglishItem, "translations"> & {
  translations: Translation[];
};

export type CreateEnglishItem = Omit<EnglishItem, "id" | "proficiency" | "exp">;

export type DeleteEnglishItem = {
  id: string;
};
