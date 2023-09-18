import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import apiClient from "@/lib/api_client";
import { queryClient } from "@/lib/react_query";
import { SSOLoginProps } from "../types";
import { User } from "@/types";

const useSSOLogin = () => {
  const router = useRouter();

  const ssoLogin = async ({ idpName }: SSOLoginProps): Promise<User> => {
    const res = await apiClient.get<User>("/auth", {
      params: {
        idp_name: idpName,
        is_login: true,
      },
    });
    return res.data;
  };

  const { isLoading } = useMutation({
    mutationFn: ssoLogin,
  });

  return isLoading;
};

export { useSSOLogin };
