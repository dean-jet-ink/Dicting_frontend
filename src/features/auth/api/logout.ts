import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/api_client";
import { useRouter } from "next/router";

const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    const res = await apiClient.post("/logout");

    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      router.push("/login");
    },
  });

  return { submit, isLoading };
};

export default useLogout;
