import apiClient from "@/lib/api_client";
import { EnglishContent, Proposal } from "../types";
import { useMutation } from "@tanstack/react-query";
import queryClient from "@/lib/react_query";

type useProposalOptions = {
  onSuccess?: (proposal: Proposal) => void;
};

const useProposal = ({ onSuccess }: useProposalOptions) => {
  const getProposal = async (englishContent: EnglishContent) => {
    const res = await apiClient.get<Proposal>("/english/proposal", {
      params: englishContent,
    });

    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: getProposal,
    onSuccess: (proposal) => {
      queryClient.setQueryData(["proposal"], proposal);
      onSuccess?.(proposal);
    },
  });

  return { submit, isLoading };
};

export { useProposal };
