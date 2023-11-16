import Image from "next/image";

import noItems from "@/../public/noItems.svg";
import empty from "@/../public/empty.svg";
import Loading from "@/components/loading/Loading";
import Card from "../card/Card";
import useFilteredEnglishItemsStore from "@/store/filtered-english-items/filteredEnglishItems";
import useSearch from "@/store/search/search";
import queryClient from "@/lib/react_query";
import { EnglishItems } from "../../types";
import useGetRequiredExp from "../../api/get-required-exp";
import { useProficiency } from "@/store/proficiency/proficiency";

const CardList = () => {
  // CardのExpにて使用する必要経験値の取得
  useGetRequiredExp();

  const { filteredEnglishItems: items } = useFilteredEnglishItemsStore();

  const englishItems: EnglishItems | undefined = queryClient.getQueryData([
    "englishItems",
  ]);

  const { searchedWord } = useSearch();

  const { proficiency } = useProficiency();

  if (!englishItems) {
    return <Loading variant="mid" />;
  }

  if (englishItems && englishItems.english_items.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="flex justify-center items-center gap-14">
          <div className="flex flex-col gap-2">
            <p>単語やフレーズを登録して</p>
            <p>あなただけの辞書を完成させましょう</p>
          </div>
          <Image src={noItems} alt="no items" className="w-[30%]  lg:w-[20%]" />
        </div>
      </div>
    );
  }

  if ((searchedWord !== "" || proficiency != "All") && items.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="flex justify-center items-center gap-4 md:gap-14">
          <p>該当するコンテンツがありません</p>
          <Image src={empty} alt="empty" className="w-[30%] lg:w-[20%]" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-11 my-32 m-auto justify-center">
        {items &&
          items.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
      </div>
    </>
  );
};

export default CardList;
