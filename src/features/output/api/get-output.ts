import apiClient from "@/lib/api_client";
import { useMutation } from "@tanstack/react-query";
import { GetOutputsParam, Outputs } from "../types";

const useGetOutput = () => {
  const getOutput = async (params: GetOutputsParam) => {
    const res = await apiClient.get<Outputs>("/english/outputs", {
      params,
    });

    return res.data;
  };

  const {
    data,
    mutate: submit,
    isLoading,
  } = useMutation({
    mutationKey: ["outputs"],
    mutationFn: getOutput,
  });

  return { data, submit, isLoading };
};

export default useGetOutput;
