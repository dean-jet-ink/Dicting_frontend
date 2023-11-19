import { ReactNode } from "react";

type EnglishItemContainerProps = {
  title: string;
  children: ReactNode;
};

const EnglishItemContainer = ({
  title,
  children,
}: EnglishItemContainerProps) => {
  return (
    <div>
      <div className="pb-2 border-b border-gray-300 mb-8">
        <h3 className="text-3xl">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default EnglishItemContainer;
