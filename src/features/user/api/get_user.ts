import { useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/api_client";
import { User } from "../types/index";
import queryClient from "@/lib/react_query";

type useUserOptions = {
  onSuccess?: (user: User) => void;
};

const useGetUser = ({ onSuccess }: useUserOptions) => {
  const getUser = async (): Promise<User> => {
    const res = await apiClient.get<User>("/user");
    return res.data;
  };

  const { data, isLoading } = useQuery({
    queryFn: getUser,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      onSuccess?.(user);
    },
  });

  return { data: data!, isLoading };
};

export { useGetUser };
