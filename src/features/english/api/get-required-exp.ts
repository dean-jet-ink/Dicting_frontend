import apiClient from "@/lib/api_client";
import { useQuery } from "@tanstack/react-query";
import { RequiredExp } from "../types";

const useGetRequiredExp = () => {
  const getRequriedExp = async () => {
    const res = await apiClient.get<RequiredExp>(`/english/required-exp`);

    return res.data;
  };

  useQuery({
    queryKey: [`requiredExp`],
    queryFn: getRequriedExp,
  });
};

export default useGetRequiredExp;
