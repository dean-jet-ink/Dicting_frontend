import apiClient from "@/lib/api_client";
import { EnglishContent, Example } from "../types";
import { useMutation } from "@tanstack/react-query";

type UseProposalExampleOptions = {
  onSuccess: (example: Example) => void;
};

const useProposalExample = ({ onSuccess }: UseProposalExampleOptions) => {
  const proposalExample = async (englishContent: EnglishContent) => {
    const res = await apiClient.get<Example>("english/proposal/example", {
      params: englishContent,
    });

    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: proposalExample,
    onSuccess: (example) => {
      onSuccess(example);
    },
  });

  return { submit, isLoading };
};

export default useProposalExample;
