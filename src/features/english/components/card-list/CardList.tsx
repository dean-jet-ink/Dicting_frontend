import Image from "next/image";

import noItems from "@/../public/noItems.svg";
import { useGetEnglishItems } from "../../api/get-english-items";
import Loading from "@/components/loading/Loading";
import Card from "../card/Card";
import SideMenu from "@/components/sidemenu/SideMenu";
import Detail from "../detail/Detail";
import { useState } from "react";
import { useGetEnglishItem } from "../../api/get-english-item";

const CardList = () => {
  const { data: items, isLoading: isLoadingItems } = useGetEnglishItems({});

  const {
    submit,
    data: item,
    isLoading: isLoadingItem,
  } = useGetEnglishItem({});
  const [isOpen, setOpen] = useState(false);

  const openDetail = (content: string) => {
    submit(content);

    document.body.style["overflow"] = "hidden";

    setOpen(true);
  };

  const closeDetail = () => {
    setOpen(false);

    document.body.style["overflow"] = "auto";
  };

  if (isLoadingItems) {
    return <Loading variant="mid" />;
  }

  if (items && items.english_items.length === 0) {
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
    <>
      <div className="flex flex-wrap justify-start gap-x-20 gap-y-11 mt-32">
        {items &&
          items.english_items.map((item) => {
            return <Card key={item.id} openDetail={openDetail} {...item} />;
          })}
      </div>

      <SideMenu isOpen={isOpen} close={closeDetail}>
        {!isLoadingItem && item ? (
          <Detail englishItem={item} getEnglishItem={submit} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Loading variant="mid" bg="bg-gray-600" />
          </div>
        )}
      </SideMenu>
    </>
  );
};

export default CardList;
