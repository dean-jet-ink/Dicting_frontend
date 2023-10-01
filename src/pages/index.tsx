import { ReactElement } from "react";
import Image from "next/image";

import BaseLayout from "@/layouts/BaseLayout";
import noItems from "../../public/noItems.svg";
import { EnglishItem } from "@/features/english/types";
import Card from "@/features/english/components/card/Card";

const TopPage = () => {
  const items: EnglishItem[] = [
    {
      id: "a",
      content: "Apple",
      translation: "りんご",
      enExplanation: "fruits",
      image:
        "https://video.kurashiru.com/production/articles/fda43e08-0b80-491b-9424-ad137ecc6067/wide_thumbnail_large.jpg?1680142474",
      proficiency: "Learning",
    },
    {
      id: "b",
      content: "Apple",
      translation: "りんご",
      enExplanation: "fruits",
      image:
        "https://video.kurashiru.com/production/articles/fda43e08-0b80-491b-9424-ad137ecc6067/wide_thumbnail_large.jpg?1680142474",
      proficiency: "Understand",
    },
    {
      id: "c",
      content: "Apple",
      translation: "りんご",
      enExplanation: "fruits",
      image:
        "https://video.kurashiru.com/production/articles/fda43e08-0b80-491b-9424-ad137ecc6067/wide_thumbnail_large.jpg?1680142474",
      proficiency: "Learning",
    },
    {
      id: "c",
      content: "Apple",
      translation: "りんご",
      enExplanation: "fruits",
      image:
        "https://video.kurashiru.com/production/articles/fda43e08-0b80-491b-9424-ad137ecc6067/wide_thumbnail_large.jpg?1680142474",
      proficiency: "Mastered",
    },
    {
      id: "c",
      content: "Apple",
      translation: "りんご",
      enExplanation: "fruits",
      image:
        "https://video.kurashiru.com/production/articles/fda43e08-0b80-491b-9424-ad137ecc6067/wide_thumbnail_large.jpg?1680142474",
      proficiency: "Learning",
    },
    {
      id: "c",
      content: "Apple",
      translation: "りんご",
      enExplanation: "fruits",
      image:
        "https://video.kurashiru.com/production/articles/fda43e08-0b80-491b-9424-ad137ecc6067/wide_thumbnail_large.jpg?1680142474",
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
    <div className="mt-14">
      <div className="flex flex-wrap justify-start gap-3">
        {items.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

TopPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default TopPage;
