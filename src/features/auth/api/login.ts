import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import apiClient from "@/lib/api_client";
import { Credential } from "../types";

const useLogin = () => {
  const router = useRouter();

  const login = async (credential: Credential) => {
    const res = await apiClient.post("/login", credential);
    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      router.push("/");
    },
  });

  return { submit, isLoading };
};

export { useLogin };
