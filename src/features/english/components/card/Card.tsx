import { EnglishItemInfo } from "../../types/index";
import ProficiencyIcon from "../proficiency/Proficiency";
import noImage from "../../../../../public/noImage.png";
import Image from "next/image";
import Exp from "../exp/Exp";
import DeleteIcon from "@/components/deleteIcon/DeleteIcon";
import Button from "@/components/button/Button";
import { useState } from "react";
import Modal from "@/components/modal/Modal";
import { useDeleteEnglishItem } from "../../api/delete-english-item";
import Img from "@/components/image/Img";
import { useGetEnglishItem } from "../../api/get-english-item";
import Loading from "@/components/loading/Loading";
import CardContent from "../card-content/CardContent";
import SideMenu from "@/components/sidemenu/SideMenu";

const Card = ({
  id,
  content,
  translations,
  en_explanation,
  img,
  proficiency,
  exp,
}: EnglishItemInfo) => {
  // コンテンツモーダルに関する処理
  const [isOpenContent, setOpenContent] = useState(false);

  const { data, isFetching, refetch } = useGetEnglishItem({ id });

  const openContent = () => {
    refetch();
    document.body.style["overflow"] = "hidden";
    setOpenContent(true);
  };

  const closeContent = () => {
    document.body.style["overflow"] = "auto";
    setOpenContent(false);
  };

  const [isOpenDelete, setOpenDelete] = useState(false);

  const onSuccess = () => {
    setOpenDelete(false);
  };

  const { submit, isLoading } = useDeleteEnglishItem({ onSuccess });

  const onSubmit = () => {
    submit({ id });
  };

  const openDeleteModal = () => {
    setOpenDelete(true);
  };

  const closeDeleteModal = () => {
    setOpenDelete(false);
  };

  const [isHover, setHover] = useState(false);
  const imgStyle = `w-24 h-24 object-cover rounded-sm transition-all duration-300`;
  const unhoveredImgStyle = `${imgStyle} grayscale-[80%]`;

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div>
      <div
        className="bg-sub rounded-sm shadow-md hover:shadow-lg hover:scale-105 cursor-pointer transition-all duration-200 relative w-full sm:w-[60%] md:w-[340px] lg:w-[300px] xl:w-[392px] m-auto h-54"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={onMouseEnter}
        onTouchEnd={onMouseLeave}
      >
        <div className="absolute top-6 right-6">
          <DeleteIcon remove={openDeleteModal} />
        </div>
        <div className="pt-12 pb-4 px-6 w-full h-full" onClick={openContent}>
          <div className="w-full mt-1">
            <h3 className="text-lg mb-4 whitespace-nowrap overflow-x-hidden text-ellipsis">
              {content}
            </h3>
            <p className="text-xs whitespace-nowrap overflow-x-hidden text-ellipsis">
              {translations.join("　")}
            </p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div>
              <Img
                defaultImg={noImage}
                img={img}
                className={isHover ? imgStyle : unhoveredImgStyle}
              />
            </div>
            <div className="flex items-center justify-center gap-6">
              <ProficiencyIcon proficiency={proficiency} />
              <Exp exp={exp} proficiency={proficiency} />
            </div>
          </div>
        </div>
      </div>

      {/* コンテンツモーダル */}
      <SideMenu isOpen={isOpenContent} close={closeContent}>
        {data && isOpenContent ? (
          isFetching ? (
            <div className="w-full h-full flex items-center justify-center">
              <Loading variant="mid" bg="bg-gray-600" />
            </div>
          ) : (
            <CardContent
              englishItem={data}
              refetch={() => {
                refetch();
              }}
            />
          )
        ) : (
          <></>
        )}
      </SideMenu>

      {/* 削除モーダル */}
      <Modal isOpen={isOpenDelete} close={closeDeleteModal} zIndex="z-[1000]">
        <div className="text-center mt-4 mb-10 w-96">
          <span className="text-red-600">{content}</span>を削除しますか？
        </div>
        <div className="flex gap-8 w-full items-center justify-center">
          <Button onClick={onSubmit} isLoading={isLoading}>
            はい
          </Button>
          <Button variant="secondary" onClick={closeDeleteModal}>
            いいえ
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
