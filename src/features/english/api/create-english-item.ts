import { useMutation } from "@tanstack/react-query";

import { CreateEnglishItem } from "../types/index";
import apiClient from "@/lib/api_client";
import queryClient from "@/lib/react_query";

type useCreateEnglishItemOptions = {
  onSuccess?: () => void;
};

const useCreateEnglishItem = ({ onSuccess }: useCreateEnglishItemOptions) => {
  const createEnglishItem = async (englishItem: CreateEnglishItem) => {
    const res = await apiClient.post("/english", englishItem);
    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: createEnglishItem,
    onSuccess: () => {
      queryClient.invalidateQueries(["englishItems"]);
      onSuccess?.();
    },
  });

  return { submit, isLoading };
};

export { useCreateEnglishItem };
