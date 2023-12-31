import { Plus } from "lucide-react";
import {
  FormState,
  UseFieldArrayReturn,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import TranslationForm from "./TranslationForm";
import { EnglishItemFormForHook } from "@/features/english/types";

type TranslationFormListProps = {
  content: string;
  translationFields: UseFieldArrayReturn<
    EnglishItemFormForHook,
    "translations",
    "id"
  >;
  register: UseFormRegister<EnglishItemFormForHook>;
  formState: FormState<EnglishItemFormForHook>;
  setValue: UseFormSetValue<EnglishItemFormForHook>;
};

const TranslationFormList = ({
  content,
  translationFields: { fields, append, remove },
  register,
  formState,
  setValue,
}: TranslationFormListProps) => {
  return (
    <div className="flex items-center justify-start gap-5">
      <div className="text-white bg-gray-600 w-6 h-6 rounded-sm flex flex-col items-center justify-center">
        <p>あ</p>
      </div>
      <div className="sm:grid grid-cols-2 items-center justify-start flex-wrap gap-7 w-full mb-8">
        {fields.map(({ id, translation }, index) => (
          <TranslationForm
            key={`${id}:${index}:${translation}`}
            content={content}
            index={index}
            translation={translation}
            register={register}
            formState={formState}
            remove={remove}
            setValue={setValue}
          />
        ))}
        <Plus
          onClick={() => {
            append({ translation: "" });
          }}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TranslationFormList;
