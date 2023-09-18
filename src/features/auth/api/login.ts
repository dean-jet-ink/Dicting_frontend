import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import apiClient from "@/lib/api_client";
import { queryClient } from "@/lib/react_query";
import { Credential } from "../types";
import { User } from "@/types";

const useLogin = () => {
  const router = useRouter();

  const login = async (credential: Credential): Promise<User> => {
    const res = await apiClient.post<User>("/login", credential);
    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user);
      router.push("/");
    },
  });

  return { submit, isLoading };
};

export { useLogin };
