import apiClient from "@/lib/api_client";
import { EnglishItem } from "../types";
import { useQuery } from "@tanstack/react-query";
import queryClient from "@/lib/react_query";

type useGetEnglishItemOptions = {
  id: string;
  onSuccess?: (englishItem: EnglishItem) => void;
};

const useGetEnglishItem = ({ id, onSuccess }: useGetEnglishItemOptions) => {
  const getEnglishItem = async () => {
    const encodedId = encodeURIComponent(id);

    const res = await apiClient.get<EnglishItem>(`/english/${encodedId}`);

    return res.data;
  };

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["englishItem"],
    queryFn: getEnglishItem,
    enabled: false,
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

  return { data, isFetching, refetch };
};

export { useGetEnglishItem };
