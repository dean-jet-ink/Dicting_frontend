import { ObjectSchema, array, number, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Answer, Answers } from "../types";

const answerSchema: ObjectSchema<Answer> = object({
  index: number().required(),
  question: string().required(),
  answer: string()
    .max(255, "255文字以下で入力してください")
    .required("この項目は必須です"),
});

const answersSchema: ObjectSchema<Answers> = object({
  english_item_id: string().required(),
  content: string().required(),
  answers: array().of(answerSchema).required(),
});

const answersResolver = yupResolver(answersSchema);

export default answersResolver;
