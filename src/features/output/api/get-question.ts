import apiClient from "@/lib/api_client";
import { Question } from "../types";
import { useQuery } from "@tanstack/react-query";

type UseGetQuestionOptions = {
  content: string;
  index: number;
  onSuccess?: (question: Question) => void;
};

const useGetQuestion = ({
  content,
  index,
  onSuccess,
}: UseGetQuestionOptions) => {
  const getQuestion = async () => {
    const res = await apiClient.get<Question>("/english/output", {
      params: {
        content,
      },
    });

    const question = res.data;

    onSuccess?.(question);

    return question;
  };

  const { data, isFetching, refetch } = useQuery({
    queryKey: [`question_${index}`],
    queryFn: getQuestion,
  });

  return { data, isFetching, refetch };
};

export { useGetQuestion };
