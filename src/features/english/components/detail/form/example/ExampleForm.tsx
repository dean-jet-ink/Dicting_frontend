import {
  FormState,
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { EnglishItemForm, Example } from "@/features/english/types";
import Input from "@/components/form/Input";
import AIIcon from "../../../ai/AIIcon";
import useProposalExample from "@/features/english/api/proposal-example";
import DeleteIcon from "@/components/deleteIcon/DeleteIcon";

type ExampleFormProps = {
  content: string;
  index: number;
  example: string;
  translation: string;
  register: UseFormRegister<EnglishItemForm>;
  formState: FormState<EnglishItemForm>;
  remove: UseFieldArrayRemove;
  setValue: UseFormSetValue<EnglishItemForm>;
};

const ExampleForm = ({
  content,
  index,
  example,
  translation,
  register,
  formState,
  setValue,
  remove,
}: ExampleFormProps) => {
  const onSuccess = (example: Example) => {
    setValue(`examples.${index}.example`, example.example);
    setValue(`examples.${index}.translation`, example.translation);
  };

  const { submit, isLoading } = useProposalExample({ onSuccess });

  const onClickSubmit = () => {
    submit({ content });
  };

  return (
    <div>
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
          isLoading={isLoading}
        />
      </div>
      <div className="flex items-center justify-start gap-5">
        <div className="text-white bg-gray-600 w-6 h-6 rounded-sm flex flex-col items-center justify-center">
          <p>あ</p>
        </div>
        <Input
          {...register(`examples.${index}.translation`, {
            required: "この項目は必須です",
          })}
          error={formState.errors["examples"]?.[index]?.translation}
          defaultValue={translation}
          isLoading={isLoading}
        />
      </div>
      <div className="flex items-center justify-end mt-2 gap-3">
        <AIIcon submit={onClickSubmit} isLoading={isLoading} />
        <DeleteIcon remove={() => remove(index)} />
      </div>
    </div>
  );
};

export default ExampleForm;
