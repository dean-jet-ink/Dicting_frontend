import apiClient from "@/lib/api_client";
import { DeleteEnglishItem } from "../types";
import { useMutation } from "@tanstack/react-query";
import queryClient from "@/lib/react_query";
import { url } from "inspector";

type UseDeleteEnglishItemOptions = {
  onSuccess?: () => void;
};

const useDeleteEnglishItem = ({ onSuccess }: UseDeleteEnglishItemOptions) => {
  const deleteEnglishItem = async (deleteEnglishItem: DeleteEnglishItem) => {
    const encodedId = encodeURIComponent(deleteEnglishItem.id)

    const res = await apiClient.delete(`/english/${encodedId}`);

    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: deleteEnglishItem,
    onSuccess: () => {
      queryClient.invalidateQueries(["englishItems"]);
      onSuccess?.();
    },
  });

  return { submit, isLoading };
};

export { useDeleteEnglishItem };
