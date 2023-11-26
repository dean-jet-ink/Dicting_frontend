import Input from "@/components/form/Input";
import { EnglishItemFormForHook } from "@/features/english/types";
import { FormState, UseFormRegister, UseFormSetValue } from "react-hook-form";
import AIIcon from "../../../ai/AIIcon";
import { useProposalExplanation } from "@/features/english/api/proposal-explanation";
import { useCallback } from "react";

type ExplanationProps = {
  content: string;
  register: UseFormRegister<EnglishItemFormForHook>;
  formState: FormState<EnglishItemFormForHook>;
  setValue: UseFormSetValue<EnglishItemFormForHook>;
};

const ExplanationForm = ({
  content,
  register,
  formState,
  setValue,
}: ExplanationProps) => {
  const onSuccess = (explanation: string) => {
    setValue("en_explanation", explanation);
  };

  const { submit, isLoading } = useProposalExplanation({ onSuccess });

  const onClickSubmit = useCallback(() => {
    submit({ content });
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <div className="flex items-center justify-start gap-5">
      <div className="border border-gray-600 w-6 h-6 rounded-sm flex flex-col items-center justify-center">
        <p>A</p>
      </div>
      <div className="w-full">
        <Input
          {...register("en_explanation", {
            required: "この項目は必須です",
          })}
          error={formState.errors["en_explanation"]}
          isLoading={isLoading}
        />
        <div className="w-fit mt-2 ml-auto">
          <AIIcon submit={onClickSubmit} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default ExplanationForm;
