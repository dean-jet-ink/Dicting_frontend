import apiClient from "@/lib/api_client";
import { DeleteOutputsParam } from "../types";
import { useMutation } from "@tanstack/react-query";
import queryClient from "@/lib/react_query";

type UseDeleteOutputOptions = {
  onSuccess?: () => void;
};

const useDeleteOutput = ({ onSuccess }: UseDeleteOutputOptions) => {
  const deleteOutput = async (param: DeleteOutputsParam) => {
    const res = await apiClient.delete("/english/output", {
      params: param,
    });

    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: deleteOutput,
    onSuccess: () => {
      queryClient.invalidateQueries(["outputTimes"])
      onSuccess?.();
    },
  });

  return { submit, isLoading };
};

export default useDeleteOutput;
