import {
  FormState,
  UseFieldArrayReturn,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { EnglishItemForm, Translation } from "@/features/english/types";
import EnglishItemFormContainer from "../EnglishItemFormContainer";
import TranslationFormList from "./TranslationFormList";
import ExplanationForm from "./ExplanationForm";
import { useEffect, useState } from "react";

type MeaningFormProps = {
  isEdit: boolean;
  content: string;
  translations: string[];
  enExplanation: string;
  translationFields: UseFieldArrayReturn<EnglishItemForm, "translations", "id">;
  register: UseFormRegister<EnglishItemForm>;
  formState: FormState<EnglishItemForm>;
  setValue: UseFormSetValue<EnglishItemForm>;
};

const MeaningForm = ({
  isEdit,
  content,
  translations,
  enExplanation,
  translationFields,
  register,
  formState,
  setValue,
}: MeaningFormProps) => {
  if (isEdit) {
    return (
      <EnglishItemFormContainer title="Meaning">
        <div className="flex flex-col gap-5">
          <TranslationFormList
            content={content}
            translationFields={translationFields}
            register={register}
            formState={formState}
            setValue={setValue}
          />
          <ExplanationForm
            content={content}
            register={register}
            formState={formState}
            setValue={setValue}
          />
        </div>
      </EnglishItemFormContainer>
    );
  }

  return (
    <EnglishItemFormContainer title="Meaning">
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-start gap-5">
          <div className="text-white bg-gray-600 w-6 h-6 rounded-sm flex flex-col items-center justify-center">
            <p>あ</p>
          </div>
          <p>{translations.join("、 ")}</p>
        </div>
        <div className="flex items-center justify-start gap-5">
          <div className="border border-gray-600 w-6 h-6 rounded-sm flex flex-col items-center justify-center">
            <p>A</p>
          </div>
          <p>{enExplanation}</p>
        </div>
      </div>
    </EnglishItemFormContainer>
  );
};

export default MeaningForm;
