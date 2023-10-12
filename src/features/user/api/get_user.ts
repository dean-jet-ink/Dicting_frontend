import { useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/api_client";
import { User } from "../types/index";

type useUserOptions = {
  onSuccess?: (user: User) => void;
};

const useGetUser = ({ onSuccess }: useUserOptions) => {
  const getUser = async () => {
    const res = await apiClient.get<User>("/user");
    return res.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    onSuccess: (user) => {
      onSuccess?.(user);
    },
  });

  return { data: data!, isLoading };
};

export { useGetUser };
