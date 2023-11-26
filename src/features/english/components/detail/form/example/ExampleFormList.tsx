import {
  FormState,
  UseFieldArrayReturn,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import EnglishItemContainer from "../../../../../../components/container/EnglishItemContainer";
import { EnglishItemFormForHook } from "@/features/english/types";
import Accordion from "@/components/accordion/Accordion";
import { useState } from "react";
import { Plus } from "lucide-react";
import ExampleForm from "./ExampleForm";

type ExampleFormListProps = {
  isEdit: boolean;
  getValues: UseFormGetValues<EnglishItemFormForHook>;
  exampleFields: UseFieldArrayReturn<EnglishItemFormForHook, "examples", "id">;
  register: UseFormRegister<EnglishItemFormForHook>;
  formState: FormState<EnglishItemFormForHook>;
  setValue: UseFormSetValue<EnglishItemFormForHook>;
};

const ExampleFormList = ({
  isEdit,
  getValues,
  exampleFields: { fields, append, remove },
  register,
  formState,
  setValue,
}: ExampleFormListProps) => {
  const content = getValues("content");
  const [examples, setExamples] = useState(getValues("examples") ?? []);

  if (isEdit) {
    return (
      <EnglishItemContainer title="Example">
        <div className="flex flex-col gap-8">
          {fields.map(({ id, example, translation }, index) => {
            return (
              <ExampleForm
                key={`${id}:${index}:${example}:${translation}`}
                content={content}
                index={index}
                example={example}
                translation={translation}
                register={register}
                formState={formState}
                setValue={setValue}
                remove={remove}
              />
            );
          })}
          <Plus
            onClick={() => {
              append({ example: "", translation: "" });
            }}
            className="cursor-pointer -mt-4"
          />
        </div>
      </EnglishItemContainer>
    );
  }

  return (
    <EnglishItemContainer title="Example">
      <div className="flex flex-col gap-4">
        {examples.map(({ example, translation }, index) => {
          return (
            <Accordion key={index} overview={example} detail={translation} />
          );
        })}
      </div>
    </EnglishItemContainer>
  );
};

export default ExampleFormList;
