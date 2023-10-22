import apiClient from "@/lib/api_client";
import { CreateEnglishItem } from "../types";
import { useMutation } from "@tanstack/react-query";
import queryClient from "@/lib/react_query";

type UseUpdateEnglishItemOpetions = {
  onSuccess?: () => void;
};

const useUpdateEnglishItem = ({ onSuccess }: UseUpdateEnglishItemOpetions) => {
  const updateEnglishItem = async (englishItem: CreateEnglishItem) => {
    const res = await apiClient.put("/english", englishItem);
    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: updateEnglishItem,
    onSuccess: () => {
      queryClient.invalidateQueries(["englishItems"]);
      onSuccess?.();
    },
  });

  return { submit, isLoading };
};

export default useUpdateEnglishItem;
