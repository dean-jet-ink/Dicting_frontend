import Image from "next/image";

import noItems from "@/../public/noItems.svg";
import { useGetEnglishItems } from "../../api/get-english-items";
import Loading from "@/components/loading/Loading";
import Card from "../card/Card";

const CardList = () => {
  const { data, isLoading } = useGetEnglishItems({});

  if (isLoading) {
    return <Loading variant="mid" />;
  }
  debugger;

  if (data && data.english_items.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center -mt-14">
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
    <div className="flex flex-wrap justify-start gap-x-3 gap-y-7 mt-32">
      {data &&
        data.english_items.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
    </div>
  );
};

export default CardList;
