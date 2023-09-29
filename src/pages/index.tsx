import { ReactElement } from "react";
import Image from "next/image";

import BaseLayout from "@/layouts/BaseLayout";
import noItems from "../../public/noItems.svg";

const TopPage = () => {
  const items = null;

  if (!items) {
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

  return <div></div>;
};

TopPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default TopPage;
