import { useRef, useState } from "react";

import queryClient from "@/lib/react_query";
import { EnglishItem } from "../../english/types";
import Modal from "@/components/modal/Modal";
import OutputForm from "./OutputForm";
import History from "./History";
import EnglishItemContainer from "@/components/container/EnglishItemContainer";

const Output = () => {
  const englishItem: EnglishItem | undefined = queryClient.getQueryData([
    "englishItem",
  ]);

  const { id, content } = englishItem!;

  const outputRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const Line1Ref = useRef<HTMLDivElement>(null);
  const Line2Ref = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    outputRef.current?.classList.add("text-accent");
    arrowRef.current?.classList.add("translate-x-2");
    Line1Ref.current?.classList.add("!bg-accent");
    Line2Ref.current?.classList.add("!bg-accent");
  };

  const onMouseLeave = () => {
    outputRef.current?.classList.remove("text-accent");
    arrowRef.current?.classList.remove("translate-x-2");
    Line1Ref.current?.classList.remove("!bg-accent");
    Line2Ref.current?.classList.remove("!bg-accent");
  };

  const [isOpen, setOpen] = useState(false);

  const openOutput = () => {
    setOpen(true);
  };

  const closeOutput = () => {
    setOpen(false);
  };

  return (
    <div className="pt-10">
      <div>
        <h2 className="text-lg md:text-2xl mb-20 w-fit m-auto">{content}</h2>
      </div>
      <EnglishItemContainer title="Output">
        <div
          className="relative flex items-end justify-center cursor-pointer w-fit m-auto border border-gray-500 py-3 px-6 hover:border-accent mt-16"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onTouchStart={onMouseEnter}
          onTouchEnd={onMouseLeave}
          onClick={openOutput}
        >
          <div className="text-3xl transition-all duration-300" ref={outputRef}>
            Output
          </div>
          <div
            className="absolute -right-6 transition-all duration-200"
            ref={arrowRef}
          >
            <div
              className="w-10 h-[1px] bg-gray-500 transition-all duration-300"
              ref={Line1Ref}
            ></div>
            <div
              className="w-2 h-[1px] bg-gray-500 absolute top-0 right-0 origin-bottom-right rotate-45 transition-all duration-300"
              ref={Line2Ref}
            ></div>
          </div>
        </div>
      </EnglishItemContainer>

      <div className="mt-20">
        <History englishItemId={englishItem!.id} />
      </div>

      <Modal isOpen={isOpen} close={closeOutput}>
        {isOpen && <OutputForm englishItemId={id} content={content} />}
      </Modal>
    </div>
  );
};

export default Output;
