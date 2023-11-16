import apiClient from "@/lib/api_client";
import { AdviceList, Answers } from "../types";
import { useMutation } from "@tanstack/react-query";
import queryClient from "@/lib/react_query";

type UseAnswerQuestionsOptions = {
  onSuccess?: (adviceList: AdviceList) => void;
};

const useAnswerQuestions = ({ onSuccess }: UseAnswerQuestionsOptions) => {
  const answerQuestions = async (answers: Answers) => {
    const res = await apiClient.post<AdviceList>("/english/output", answers);

    return res.data;
  };

  const {
    data,
    mutate: submit,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationKey: ["adviceList"],
    mutationFn: answerQuestions,
    onSuccess: (adviceList) => {
      queryClient.invalidateQueries(["englishItems"]);
      onSuccess?.(adviceList);
    },
  });

  return { data, submit, isLoading, isSuccess };
};

export default useAnswerQuestions;
