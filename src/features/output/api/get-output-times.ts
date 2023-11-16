import apiClient from "@/lib/api_client";
import { OutputTimes } from "../types";
import { useQuery } from "@tanstack/react-query";

type UseGetOutputTimesOptions = {
  englishItemId: string;
};

const useGetOutputTimes = ({ englishItemId }: UseGetOutputTimesOptions) => {
  const getOutputTimes = async () => {
    const encodedId = encodeURIComponent(englishItemId);

    const res = await apiClient.get<OutputTimes>(
      `/english/output/times/${encodedId}`
    );

    return res.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["outputTimes"],
    queryFn: getOutputTimes,
  });

  return { data, isLoading };
};

export default useGetOutputTimes;
