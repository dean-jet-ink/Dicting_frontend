import apiClient from "@/lib/api_client";
import { EnglishItems } from "../types";
import { useQuery } from "@tanstack/react-query";

type useGetEnglishItemsOptions = {
  onSuccess?: (englishItemInfos: EnglishItems) => void;
};

const useGetEnglishItems = ({ onSuccess }: useGetEnglishItemsOptions) => {
  const getEnglishItems = async () => {
    const res = await apiClient.get<EnglishItems>("/english");

    return res.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["englishItems"],
    queryFn: getEnglishItems,
    onSuccess: (englishItems) => {
      onSuccess?.(englishItems);
    },
  });

  return { data: data!, isLoading };
};

export { useGetEnglishItems };
