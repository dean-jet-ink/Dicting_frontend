import Image, { StaticImageData } from "next/image";
import { ComponentProps } from "react";
import noImg from "../../../public/noImage.png";

export type ImgProps = {
  img: string;
  defaultImg?: StaticImageData;
} & Pick<ComponentProps<"img">, "className">;

const Img = ({ img, defaultImg, className }: ImgProps) => {
  return img === "" ? (
    <Image src={defaultImg ? defaultImg : noImg} alt="" className={className} />
  ) : (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img src={img} alt="" className={className} />
  );
};

export default Img;
