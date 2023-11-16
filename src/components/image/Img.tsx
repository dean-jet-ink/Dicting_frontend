import Image, { StaticImageData } from "next/image";
import { ComponentProps } from "react";

export type ImgProps = {
  img: string;
  defaultImg: StaticImageData;
} & Pick<ComponentProps<"img">, "className">;

const Img = ({ img, defaultImg, className }: ImgProps) => {
  return img === "" ? (
    <Image src={defaultImg} alt="" className={className} />
  ) : (
    <img src={img} alt="" className={className} />
  );
};

export default Img;
