import { useMutation } from "@tanstack/react-query";
import { CreateOutputForm } from "../types";
import apiClient from "@/lib/api_client";
import queryClient from "@/lib/react_query";

type UseCreateOutputOptions = {
  onSuccess: () => void;
};

const useCreateOutput = ({ onSuccess }: UseCreateOutputOptions) => {
  const createOutput = async (outputs: CreateOutputForm) => {
    const res = await apiClient.put("/english/output", outputs);

    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: createOutput,
    onSuccess: () => {
      queryClient.invalidateQueries(["outputTimes"])
      onSuccess();
    },
  });

  return { submit, isLoading };
};

export default useCreateOutput;
