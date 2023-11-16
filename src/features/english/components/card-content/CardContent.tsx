import { UseMutateFunction } from "react-query";
import { EnglishItem } from "../../types";
import TabMenu from "@/components/tabmenu/TabMenu";
import Detail from "../detail/Detail";
import Output from "../../../output/components/Output";

type CardContentProps = {
  englishItem: EnglishItem;
  refetch: () => void;
};

const CardContent = (props: CardContentProps) => {
  return (
    <TabMenu
      tabs={[
        {
          overview: "Input",
          content: <Detail {...props} />,
        },
        {
          overview: "Output",
          content: <Output />,
        },
      ]}
    />
  );
};

export default CardContent;
