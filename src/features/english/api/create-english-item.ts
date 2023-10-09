import { useMutation } from "@tanstack/react-query";

import { CreateEnglishItem, EnglishItem } from "../types/index";
import apiClient from "@/lib/api_client";
import queryClient from "@/lib/react_query";

type useCreateEnglishItemOptions = {
  onSuccess?: (englishItem: EnglishItem) => void;
};

const useCreateEnglishItem = ({ onSuccess }: useCreateEnglishItemOptions) => {
  const createEnglishItem = async (englishItem: CreateEnglishItem) => {
    const res = await apiClient.post<EnglishItem>("/english", englishItem);
    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: createEnglishItem,
    onSuccess: (englishItem) => {
      queryClient.invalidateQueries(["englishItems"]);
      onSuccess?.(englishItem);
    },
  });

  return { submit, isLoading };
};

export { useCreateEnglishItem };
