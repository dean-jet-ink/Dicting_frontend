import {
  FormState,
  UseFieldArrayReturn,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { EnglishItemForm } from "@/features/english/types";
import EnglishItemContainer from "../../../../../../components/container/EnglishItemContainer";
import TranslationFormList from "./TranslationFormList";
import ExplanationForm from "./ExplanationForm";

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
      <EnglishItemContainer title="Meaning">
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
      </EnglishItemContainer>
    );
  }

  return (
    <EnglishItemContainer title="Meaning">
      <div className="flex flex-col gap-6">
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
    </EnglishItemContainer>
  );
};

export default MeaningForm;
