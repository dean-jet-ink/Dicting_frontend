import Button from "@/components/button/Button";
import Input from "@/components/form/Input";
import { useProposal } from "../../api/proposal";
import { useForm } from "react-hook-form";
import { EnglishContent, Proposal } from "../../types";
import { ENV } from "@/config/constants";

type PreCreateEnglishFormProps = {
  close: () => void;
  openForm: () => void;
};

const PreCreateEnglishForm = ({
  close,
  openForm,
}: PreCreateEnglishFormProps) => {
  const onSuccess = (proposal: Proposal) => {
    openForm();
    close();
  };

  const { submit, isLoading } = useProposal({ onSuccess });

  const { register, handleSubmit, formState } = useForm<EnglishContent>();

  const onSubmit = (data: EnglishContent) => {
    if (ENV === "dev") {
      openForm();
      close();
    } else {
      submit(data);
    }
  };

  return (
    <>
      <div className="text-center">
        <label htmlFor="create-english" className="block mb-8">
          登録する英語を入力してください
        </label>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8 w-96">
          <Input
            id="create-english"
            placeholder="英単語、フレーズ、文 etc"
            {...register("content", { required: "この項目は必須です" })}
            error={formState.errors["content"]}
          />
        </div>
        <div className="w-fit m-auto">
          <Button type="submit" isLoading={isLoading}>
            次へ
          </Button>
        </div>
      </form>
    </>
  );
};

export default PreCreateEnglishForm;
