import Button from "@/components/button/Button";
import { useState } from "react";
import EnglishVideo from "./EnglishVideo";

type EnglishVideoContainerProps = {
  content: string;
};

const EnglishVideoContainer = ({ content }: EnglishVideoContainerProps) => {
  const [isAvailable, setAvailable] = useState(false);

  const onClickAvailable = () => {
    setAvailable(true);
  };

  return isAvailable ? (
    <EnglishVideo content={content} />
  ) : (
    <Button onClick={onClickAvailable}>Watch Video</Button>
  );
};

export default EnglishVideoContainer;
