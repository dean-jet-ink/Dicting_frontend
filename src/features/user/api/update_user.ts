import apiClient from "@/lib/api_client";
import { User, UserForm } from "../types";
import { useMutation } from "@tanstack/react-query";
import queryClient from "@/lib/react_query";

type UseUpdateUserOptions = {
  onSuccess?: () => void;
};

const useUpdateUser = ({ onSuccess }: UseUpdateUserOptions) => {
  const updateUser = async (data: UserForm) => {
    const res = await apiClient.put("/user", data);

    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      onSuccess?.();
    },
  });

  return { submit, isLoading };
};

export default useUpdateUser;
