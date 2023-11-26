import { ObjectSchema, array, bool, number, object, string } from "yup";
import { EnglishItemFormForHook, Example, Img, Translation } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";

const translationSchema: ObjectSchema<Translation> = object({
  translation: string().required("この項目は必須です"),
});

const exampleShcema: ObjectSchema<Example> = object({
  id: string(),
  example: string()
    .max(1000, "1000文字以下で入力してください")
    .required("この項目は必須です"),
  translation: string()
    .max(1000, "1000文字以下で入力してください")
    .required("この項目は必須です"),
});

const imgSchema: ObjectSchema<Img> = object({
  id: string(),
  url: string().required(),
  is_thumbnail: bool().required(),
});

const englishItemSchema: ObjectSchema<EnglishItemFormForHook> = object({
  id: string(),
  content: string().required(),
  translations: array().of(translationSchema).required(),
  en_explanation: string()
    .max(1000, "1000文字以下で入力してください")
    .required("この項目は必須です"),
  examples: array().of(exampleShcema).required(),
  imgs: array().of(imgSchema),
});

const englishItemResolver = yupResolver(englishItemSchema);

export default englishItemResolver;
