import apiClient from "@/lib/api_client";
import { EnglishItem } from "../types";
import { useQuery } from "@tanstack/react-query";
import queryClient from "@/lib/react_query";

type useGetEnglishItemsOptions = {
  onSuccess?: (englishItems: EnglishItem[]) => void;
};

const useGetEnglishItems = ({ onSuccess }: useGetEnglishItemsOptions) => {
  const getEnglishItems = async () => {
    const res = await apiClient.get<EnglishItem[]>("/english");

    return res.data;
  };

  const { data, isLoading } = useQuery({
    queryFn: getEnglishItems,
    onSuccess: (englishItems) => {
      queryClient.setQueryData(["englishItems"], englishItems);
      onSuccess?.(englishItems);
    },
  });

  return { data, isLoading };
};

export { useGetEnglishItems };
