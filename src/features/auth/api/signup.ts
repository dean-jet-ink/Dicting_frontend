import useRouter from "next/router";
import { useMutation } from "react-query";

import apiClient from "@/lib/api_client";
import { queryClient } from "@/lib/react_query";
import { SignupForm } from "../types";
import { User } from "@/types";

const useSignup = () => {
  const router = useRouter();

  const signup = async (form: SignupForm): Promise<User> => {
    const res = await apiClient.post<User>("/signup", form);
    return res.data;
  };

  const { mutate: submit, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      router.push("/");
    },
  });

  return { submit, isLoading };
};

export { useSignup };
