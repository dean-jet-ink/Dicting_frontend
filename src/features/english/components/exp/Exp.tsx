import ProgressCircle from "@/components/progress/ProgressCircle";
import { Proficiency } from "../../types";

type ExpProps = {
  proficiency: Proficiency;
  exp: number;
};

const Exp = ({ proficiency, exp }: ExpProps) => {
  let next = 100;
  if (proficiency === "Understand") next = 300;

  const percent = Math.round((exp / next) * 100) / 100;

  return <ProgressCircle percent={percent} content={`${exp}/${next}`} />;
};

export default Exp;
