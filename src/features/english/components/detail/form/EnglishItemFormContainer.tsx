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
      {children}
    </div>
  );
};

export default EnglishItemFormContainer;
