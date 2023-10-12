import { EnglishItemInfo } from "../../types/index";
import ProficiencyIcon from "./Proficiency";
import noImage from "../../../../../public/noImage.png";
import Image from "next/image";

export type CardProps = EnglishItemInfo;

const Card = ({
  content,
  translations,
  en_explanation,
  img,
  proficiency,
}: CardProps) => {
  return (
    <div
      style={{ width: "310px" }}
      className="bg-sub rounded-sm border border-gray-300 shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-200 relative"
    >
      <ProficiencyIcon proficiency={proficiency} />
      <div
        style={{ top: "45%" }}
        className="absolute w-3 h-3 left-2 bg-main border border-gray-400 rounded-full"
      ></div>
      <div className="flex justify-between items-center">
        <div style={{ flex: "70%" }} className="w-full pl-9 pr-2">
          <h3 className="text-md mb-3">{content}</h3>
          <p className="text-xs">{translations.join(", ")}</p>
        </div>
        <div style={{ flex: "30%" }}>
          {img === "" ? (
            <Image
              src={noImage}
              alt=""
              className="h-20 object-cover rounded-sm"
            />
          ) : (
            <img src={img} alt="" className="h-20 object-cover rounded-sm" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
