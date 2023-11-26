import Button from "@/components/button/Button";
import Input from "@/components/form/Input";
import { useProposal } from "../../api/proposal";
import { useForm } from "react-hook-form";
import { EnglishContent, Proposal } from "../../types";
import { useState } from "react";
import CreateEnglishForm from "./CreateEnglishForm";
import Loading from "@/components/loading/Loading";

type ProposalEnglishFormProps = {
  closeProposalModal: () => void;
};

const ProposalEnglishForm = ({
  closeProposalModal,
}: ProposalEnglishFormProps) => {
  const [isOpen, setOpen] = useState(false);

  const openCreateForm = () => {
    setOpen(true);
  };

  const closeCreateForm = () => {
    closeProposalModal();
    setOpen(false);
  };

  const onSuccess = (proposal: Proposal) => {
    openCreateForm();
  };

  const { data, submit, isLoading } = useProposal({ onSuccess });

  const { register, handleSubmit, formState } = useForm<EnglishContent>();

  const onSubmit = (data: EnglishContent) => {
    submit(data);
  };

  return (
    <div className="sm:w-106">
      <div className={isLoading ? "hidden" : "block"}>
        <div className="text-center">
          <label htmlFor="create-english" className="block mb-8">
            登録する英語を入力してください
          </label>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8 w-full">
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
      </div>

      <div className={isLoading ? "block" : "hidden"}>
        <div className="w-full flex items-center justify-center gap-2">
          <span className="mr-4">Now generating content...</span>
          <Loading variant="sm" bg="bg-gray-600" />
        </div>
      </div>

      {!isLoading && (
        <CreateEnglishForm
          proposal={data!}
          isOpen={isOpen}
          close={closeCreateForm}
        />
      )}
    </div>
  );
};

export default ProposalEnglishForm;
