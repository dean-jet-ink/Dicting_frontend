import apiClient from "@/lib/api_client";
import { User, UserImageForm } from "../types";
import { useMutation } from "@tanstack/react-query";
import queryClient from "@/lib/react_query";

type UseUpdateUserImageOptions = {
  onSuccess?: () => void;
};

const useUpdateUserImage = ({ onSuccess }: UseUpdateUserImageOptions) => {
  const updateUserImage = async (data: UserImageForm) => {
    const res = await apiClient.put("/user/profile-img", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: updateUserImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      onSuccess?.();
    },
  });

  return { submit, isLoading };
};

export default useUpdateUserImage;
