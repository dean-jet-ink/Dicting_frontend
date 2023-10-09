import {
  FormState,
  UseFieldArrayReturn,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import EnglishItemFormContainer from "./EnglishItemFormContainer";
import { EnglishItemForm } from "@/features/english/types";
import Accordion from "@/components/accordion/Accordion";
import Input from "@/components/form/Input";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

type ExampleFormProps = {
  isEdit: boolean;
  getValues: UseFormGetValues<EnglishItemForm>;
  exampleFields: UseFieldArrayReturn<EnglishItemForm, "examples", "id">;
  register: UseFormRegister<EnglishItemForm>;
  formState: FormState<EnglishItemForm>;
};

const ExampleForm = ({
  isEdit,
  getValues,
  exampleFields: { fields, append, remove },
  register,
  formState,
}: ExampleFormProps) => {
  const [examples, setExamples] = useState(getValues("examples") ?? []);

  if (isEdit) {
    return (
      <EnglishItemFormContainer title="Example">
        <div className="flex flex-col gap-8">
          {fields.map(({ id, example, translation }, index) => {
            return (
              <div key={id}>
                <div className="flex items-center justify-start gap-5">
                  <div className="border border-gray-600 w-6 h-6 rounded-sm flex flex-col items-center justify-center">
                    <p>A</p>
                  </div>
                  <Input
                    {...register(`examples.${index}.example`, {
                      required: "この項目は必須です",
                    })}
                    error={formState.errors["examples"]?.[index]?.example}
                    defaultValue={example}
                  />
                </div>
                <div className="flex items-center justify-start gap-5">
                  <div className="text-white bg-gray-600 w-6 h-6 rounded-sm flex flex-col items-center justify-center">
                    <p>文</p>
                  </div>
                  <Input
                    {...register(`examples.${index}.translation`, {
                      required: "この項目は必須です",
                    })}
                    error={formState.errors["examples"]?.[index]?.translation}
                    defaultValue={translation}
                  />
                </div>
                <Trash2
                  className="w-5 h-5 cursor-pointer ml-auto mt-2"
                  onClick={() => {
                    remove(index);
                  }}
                />
              </div>
            );
          })}
          <Plus
            onClick={() => {
              append({ example: "", translation: "" });
            }}
            className="cursor-pointer -mt-4"
          />
        </div>
      </EnglishItemFormContainer>
    );
  }

  return (
    <EnglishItemFormContainer title="Example">
      {examples.map(({ example, translation }, index) => {
        return (
          <Accordion key={index} overview={example} detail={translation} />
        );
      })}
    </EnglishItemFormContainer>
  );
};

export default ExampleForm;
