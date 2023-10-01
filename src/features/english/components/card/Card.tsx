import { EnglishItem } from "../../types/index";
import ProficiencyIcon from "./Proficiency";

export type CardProps = Omit<EnglishItem, "id">;

const Card = ({
  content,
  translation,
  enExplanation,
  image,
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
        <div className="w-full pl-9 pr-2">
          <h3 className="text-md mb-3">{content}</h3>
          <p className="text-xs">{translation}</p>
        </div>
        <img src={image} alt="" className="w-28 h-24 object-cover rounded-sm" />
      </div>
    </div>
  );
};

export default Card;
