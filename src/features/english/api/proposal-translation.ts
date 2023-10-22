import apiClient from "@/lib/api_client";
import { EnglishContent, EnglishItemForm, Example } from "../types";
import { useMutation } from "@tanstack/react-query";
import queryClient from "@/lib/react_query";

type UseProposalTranslationOptions = {
  onSuccess: (translation: string) => void;
};

const useProposalTranslation = ({
  onSuccess,
}: UseProposalTranslationOptions) => {
  const proposalTranslation = async (englishContent: EnglishContent) => {
    const res = await apiClient.get<string>("/english/proposal/translation", {
      params: englishContent,
    });

    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: proposalTranslation,
    onSuccess: (example) => {
      onSuccess(example);
    },
  });

  return { submit, isLoading };
};

export { useProposalTranslation };
