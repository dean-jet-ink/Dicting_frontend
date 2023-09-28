import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/api_client";
import { SignupForm } from "../types";

const useSignup = () => {
  const router = useRouter();

  const signup = async (form: SignupForm) => {
    const res = await apiClient.post("/signup", form);
    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      router.push("/board");
    },
  });

  return { submit, isLoading };
};

export { useSignup };
