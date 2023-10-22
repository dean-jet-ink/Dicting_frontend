import Border from "@/components/border/border";
import { ReactNode } from "react";

type EnglishItemFormContainerProps = {
  title: string;
  children: ReactNode;
};

const EnglishItemFormContainer = ({
  title,
  children,
}: EnglishItemFormContainerProps) => {
  return (
    <div>
      <h3 className="text-subAccent">{title}</h3>
      <Border />
      <div className="px-4 py-6">{children}</div>
    </div>
  );
};

export default EnglishItemFormContainer;
