import Image from "next/image";
import Link from "next/link";

import title from "../../../public/title.svg";

type TitleProps = {
  size?: "lg" | "md";
};

const Title = ({ size = "md" }: TitleProps) => {
  return (
    <Link href="/" className="text-xl animate-text-shadow-drop-center">
      <Image src={title} alt="title" width={size == "md" ? 128 : 190} />
    </Link>
  );
};

export default Title;
