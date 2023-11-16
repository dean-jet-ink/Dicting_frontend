import ProgressCircle from "@/components/progress/ProgressCircle";
import { Proficiency, RequiredExp } from "../../types";
import queryClient from "@/lib/react_query";

type ExpProps = {
  proficiency: Proficiency;
  exp: number;
};

const Exp = ({ proficiency, exp }: ExpProps) => {
  const requiredExp = queryClient.getQueryData<RequiredExp>(["requiredExp"]);

  let next = 0;

  switch (proficiency) {
    case "Learning":
      next = requiredExp!.understand_exp;
      break;
    case "Understand":
      next = requiredExp!.mastered_exp;
      break;
    default:
      next = 0;
  }

  const percent = Math.round((exp / next) * 100) / 100;

  return <ProgressCircle percent={proficiency == "Mastered" ? 1 : percent} content={proficiency == "Mastered" ? "MAX" : `${exp}/${next}`} />;
};

export default Exp;
