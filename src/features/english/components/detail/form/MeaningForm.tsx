import { Plus, Trash2, X } from "lucide-react";
import {
  FormState,
  UseFieldArrayReturn,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import Input from "@/components/form/Input";
import { EnglishItemForm } from "@/features/english/types";
import { useState } from "react";
import EnglishItemFormContainer from "./EnglishItemFormContainer";

type MeaningFormProps = {
  isEdit: boolean;
  getValues: UseFormGetValues<EnglishItemForm>;
  translationFields: UseFieldArrayReturn<EnglishItemForm, "translations", "id">;
  register: UseFormRegister<EnglishItemForm>;
  formState: FormState<EnglishItemForm>;
};

const MeaningForm = ({
  isEdit,
  getValues,
  translationFields: { fields, append, remove },
  register,
  formState,
}: MeaningFormProps) => {
  const [translations, setTranslations] = useState(getValues("translations"));
  const [enExplanation, setEnExplanation] = useState(
    getValues("en_explanation")
  );

  if (isEdit) {
    return (
      <EnglishItemFormContainer title="Meaning">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-start gap-5">
            <div className="text-white bg-gray-600 w-6 h-6 rounded-sm flex flex-col items-center justify-center">
              <p>文</p>
            </div>
            <div className="flex items-center justify-start flex-wrap gap-7 w-full">
              {fields.map(({ id, translation }, index) => (
                <div key={id} className="w-2/5 relative">
                  <Trash2
                    className="w-4 h-4 cursor-pointer absolute top-5 -right-3"
                    onClick={() => {
                      remove(index);
                    }}
                  />
                  <Input
                    {...register(`translations.${index}.translation`, {
                      required: "この項目は必須です",
                    })}
                    error={
                      formState.errors["translations"]?.[index]?.translation
                    }
                    defaultValue={translation}
                  />
                </div>
              ))}
              <Plus
                onClick={() => {
                  append({ translation: "" });
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex items-center justify-start gap-5">
            <div className="border border-gray-600 w-6 h-6 rounded-sm flex flex-col items-center justify-center">
              <p>A</p>
            </div>
            <Input
              {...register("en_explanation", {
                required: "この項目は必須です",
              })}
              error={formState.errors["en_explanation"]}
            />
          </div>
        </div>
      </EnglishItemFormContainer>
    );
  }

  return (
    <EnglishItemFormContainer title="Meaning">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-start gap-5">
          <div className="text-white bg-gray-600 w-6 h-6 rounded-sm flex flex-col items-center justify-center">
            <p>文</p>
          </div>
          <p>
            {translations
              .map((translation) => translation.translation)
              .join("、 ")}
          </p>
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
