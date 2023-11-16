import {
  FieldError,
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { Answers, Question } from "../types";
import { useGetQuestion } from "../api/get-question";
import TextArea from "@/components/form/TextArea";
import Loading from "@/components/loading/Loading";
import DeleteIcon from "@/components/deleteIcon/DeleteIcon";
import AIIcon from "@/features/english/components/ai/AIIcon";

type OutputInputProps = {
  content: string;
  answer: string;
  register: UseFormRegister<Answers>;
  setValue: UseFormSetValue<Answers>;
  remove: UseFieldArrayRemove;
  error?: FieldError;
  index: number;
  disabled: boolean;
};

const OutputInput = ({
  content,
  answer,
  register,
  setValue,
  remove,
  error,
  index = 0,
  disabled = false,
}: OutputInputProps) => {
  const onSuccessGetQuestion = (question: Question) => {
    setValue?.(`answers.${index}.question`, question.question);
  };

  const { data, isFetching, refetch } = useGetQuestion({
    content,
    index,
    onSuccess: onSuccessGetQuestion,
  });

  const removeField = () => {
    remove?.(index);
  };

  return isFetching ? (
    <div className="w-full flex items-center justify-center gap-2">
      <span className="mr-4">Now generating question...</span>
      <Loading bg="bg-gray-600" variant="sm" />
    </div>
  ) : (
    <div className="w-full">
      <h2 className="mb-4 text-sm md:text-base">{data?.question}</h2>
      <TextArea
        {...register?.(`answers.${index}.answer`)}
        defaultValue={answer}
        error={error}
        disabled={disabled}
      />

      {!disabled && (
        <div className="flex items-center justify-end gap-4 mt-4">
          <AIIcon submit={refetch} isLoading={isFetching} />
          <DeleteIcon remove={removeField} />
        </div>
      )}
    </div>
  );
};

export default OutputInput;
