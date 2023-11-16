export type Question = {
  question: string;
};

export type Answer = {
  index: number;
  question: string;
  answer: string;
};

export type Answers = {
  english_item_id: string;
  content: string;
  answers: Answer[];
};

export type Advice = {
  index: number;
  advice: string;
};

export type AdviceList = {
  advice_list: Advice[];
};

export type Output = {
  id: string;
  index: number;
  question: string;
  answer: string;
  advice: string;
  created_at: Date;
};

export type CreateOutputForm = {
  english_item_id: string;
  outputs: Omit<Output, "id" | "created_at">[];
};

export type Outputs = {
  outputs: Output[];
};

export type OutputTimes = {
  output_times: Date[];
};

export type GetOutputsParam = {
  english_item_id: string;
  created_at: Date;
};

export type DeleteOutputsParam = {
  english_item_id: string;
  created_at: Date;
};
