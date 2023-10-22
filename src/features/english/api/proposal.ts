import apiClient from "@/lib/api_client";
import { EnglishContent, Proposal } from "../types";
import { useMutation } from "@tanstack/react-query";
import { ENV } from "@/config/constants";

type useProposalOptions = {
  onSuccess?: (proposal: Proposal) => void;
};

const useProposal = ({ onSuccess }: useProposalOptions) => {
  const getProposal = async (englishContent: EnglishContent) => {
    if (ENV === "dev") {
      const dummyProposal: Proposal = {
        content: englishContent.content,
        translations: ["テストa", "テストb", "テストc"],
        en_explanation: "this is a test",
        examples: [
          {
            example: "this is a test",
            translation: "これはテストaです",
          },
          {
            example: "this is a test",
            translation: "これはテストbです",
          },
          {
            example: "this is a test",
            translation: "これはテストcです",
          },
        ],
      };

      return dummyProposal
    }

    const res = await apiClient.get<Proposal>("/english/proposal", {
      params: englishContent,
    });

    return res.data;
  };

  const {
    data,
    mutate: submit,
    isLoading,
  } = useMutation({
    mutationKey: ["proposal"],
    mutationFn: getProposal,
    onSuccess: (proposal) => {
      onSuccess?.(proposal);
    },
  });

  return { data, submit, isLoading };
};

export { useProposal };
