import { ChevronDown } from "lucide-react";
import { Output } from "../types";
import TextArea from "@/components/form/TextArea";

type HistoryContentProps = {
  outputs: Output[];
};

const HistoryContent = ({ outputs }: HistoryContentProps) => {
  return (
    <div className="w-full sm:w-[80vw] max-w-[1024px] py-10">
      <div className="flex flex-col items-center justify-center gap-12">
        {outputs.map(({ id, question, answer, advice }, index) => {
          return (
            <div key={id} className="w-full">
              <div className="text-[42px] text-gray-400 tracking-[8px] mb-8">
                Q{index + 1}
              </div>
              <div className="w-full">
                <h2 className="mb-4">{question}</h2>
                <div className="border border-gray-400 p-3">{answer}</div>
              </div>
              <ChevronDown className="my-3 m-auto" />
              <div className="p-6 bg-sub2 rounded-sm">{advice}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryContent;
