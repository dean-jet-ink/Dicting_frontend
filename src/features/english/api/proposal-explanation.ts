import apiClient from "@/lib/api_client";
import { useMutation } from "@tanstack/react-query";
import { EnglishContent } from "../types";

type UseProposalExplanationOptions = {
  onSuccess: (explanation: string) => void;
};

const useProposalExplanation = ({
  onSuccess,
}: UseProposalExplanationOptions) => {
  const proposalExplanation = async (englishContent: EnglishContent) => {
    const res = await apiClient.get<string>("/english/proposal/explanation", {
      params: englishContent,
    });

    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: proposalExplanation,
    onSuccess: (explanation) => {
      onSuccess(explanation);
    },
  });

  return { submit, isLoading };
};

export { useProposalExplanation };
