import Image from "next/image";

import { EnglishItem } from "@/features/english/types";
import noItems from "@/../public/noItems.svg";
import Card from "@/features/english/components/card/Card";

const CardList = () => {
  const items: Omit<EnglishItem, "examples">[] = [
    {
      id: "a",
      content: "Apple",
      translations: ["りんご"],
      en_explanation: "fruits",
      images: [
        "https://video.kurashiru.com/production/articles/fda43e08-0b80-491b-9424-ad137ecc6067/wide_thumbnail_large.jpg?1680142474",
      ],
      proficiency: "Learning",
    },
    {
      id: "b",
      content: "Apple",
      translations: ["りんご"],
      en_explanation: "fruits",
      images: [
        "https://video.kurashiru.com/production/articles/fda43e08-0b80-491b-9424-ad137ecc6067/wide_thumbnail_large.jpg?1680142474",
      ],
      proficiency: "Understand",
    },
    {
      id: "c",
      content: "Apple",
      translations: ["りんご"],
      en_explanation: "fruits",
      images: [
        "https://video.kurashiru.com/production/articles/fda43e08-0b80-491b-9424-ad137ecc6067/wide_thumbnail_large.jpg?1680142474",
      ],
      proficiency: "Learning",
    },
    {
      id: "c",
      content: "Apple",
      translations: ["りんご"],
      en_explanation: "fruits",
      images: [
        "https://video.kurashiru.com/production/articles/fda43e08-0b80-491b-9424-ad137ecc6067/wide_thumbnail_large.jpg?1680142474",
      ],
      proficiency: "Mastered",
    },
    {
      id: "c",
      content: "Apple",
      translations: ["りんご"],
      en_explanation: "fruits",
      images: [
        "https://video.kurashiru.com/production/articles/fda43e08-0b80-491b-9424-ad137ecc6067/wide_thumbnail_large.jpg?1680142474",
      ],
      proficiency: "Learning",
    },
    {
      id: "c",
      content: "Apple",
      translations: ["りんご"],
      en_explanation: "fruits",
      images: [
        "https://video.kurashiru.com/production/articles/fda43e08-0b80-491b-9424-ad137ecc6067/wide_thumbnail_large.jpg?1680142474",
      ],
      proficiency: "Understand",
    },
  ];

  if (items.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="flex justify-center items-center gap-14">
          <div className="flex flex-col gap-2">
            <p>単語やフレーズを登録して</p>
            <p>あなただけの辞書を完成させましょう</p>
          </div>
          <Image src={noItems} width={180} alt="no items" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-start gap-x-3 gap-y-7">
      {items.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CardList;
