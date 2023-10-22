import apiClient from "@/lib/api_client";
import { EnglishItem } from "../types";
import { useMutation } from "@tanstack/react-query";
import queryClient from "@/lib/react_query";

type useGetEnglishItemOptions = {
  onSuccess?: (englishItem: EnglishItem) => void;
};

const useGetEnglishItem = ({ onSuccess }: useGetEnglishItemOptions) => {
  const getEnglishItem = async (content: string) => {
    const encodedContent = encodeURIComponent(content);

    const res = await apiClient.get<EnglishItem>(`/english/${encodedContent}`);

    return res.data;
  };

  const {
    mutate: submit,
    data,
    isLoading,
  } = useMutation({
    mutationFn: getEnglishItem,
    onSuccess: (englishItem) => {
      englishItem.imgs.sort((a, b) => {
        if (a.is_thumbnail && !b.is_thumbnail) {
          return -1;
        } else if (!a.is_thumbnail && b.is_thumbnail) {
          return 1;
        }
        return 0;
      });

      queryClient.setQueryData(["englishItem"], englishItem);
      onSuccess?.(englishItem);
    },
  });

  return { submit, data, isLoading };
};

export { useGetEnglishItem };
