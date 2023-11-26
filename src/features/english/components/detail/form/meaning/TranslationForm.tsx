import {
  FormState,
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import { EnglishItemFormForHook } from "@/features/english/types";
import Input from "@/components/form/Input";
import { useProposalTranslation } from "@/features/english/api/proposal-translation";
import AIIcon from "../../../ai/AIIcon";
import { useCallback } from "react";
import DeleteIcon from "@/components/deleteIcon/DeleteIcon";

type TranslationFormProps = {
  content: string;
  index: number;
  translation: string;
  register: UseFormRegister<EnglishItemFormForHook>;
  formState: FormState<EnglishItemFormForHook>;
  remove: UseFieldArrayRemove;
  setValue: UseFormSetValue<EnglishItemFormForHook>;
};

const TranslationForm = ({
  content,
  index,
  translation,
  register,
  formState,
  remove,
  setValue,
}: TranslationFormProps) => {
  const onSuccess = (translation: string) => {
    setValue(`translations.${index}.translation`, translation);
  };

  const { submit, isLoading } = useProposalTranslation({ onSuccess });

  const onClickSubmit = useCallback(() => {
    submit({ content });
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  const onClickRemove = useCallback(() => {
    remove(index);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <div>
      <Input
        {...register(`translations.${index}.translation`, {
          required: "この項目は必須です",
        })}
        error={formState.errors["translations"]?.[index]?.translation}
        isLoading={isLoading}
        defaultValue={translation}
      />
      <div className="flex mt-2 items-center justify-end gap-3">
        <AIIcon submit={onClickSubmit} isLoading={isLoading} />
        <DeleteIcon remove={onClickRemove} />
      </div>
    </div>
  );
};

export default TranslationForm;
