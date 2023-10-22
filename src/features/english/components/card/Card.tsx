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

export type CardProps = {
  openDetail: (content: string) => void;
} & EnglishItemInfo;

const Card = ({
  openDetail,
  id,
  content,
  translations,
  en_explanation,
  img,
  proficiency,
  exp,
}: CardProps) => {
  const [isOpen, setOpen] = useState(false);

  const onSuccess = () => {
    setOpen(false);
  };

  const { submit, isLoading } = useDeleteEnglishItem({ onSuccess });

  const onSubmit = () => {
    submit({ id });
  };

  const openDeleteModal = () => {
    setOpen(true);
  };

  const closeDeleteModal = () => {
    setOpen(false);
  };

  const [isHover, setHover] = useState(false);
  const imgStyle = `w-32 h-32 object-cover rounded-sm shadow-lg transition-all duration-300`;
  const unhoveredImgStyle = `${imgStyle} grayscale-[70%]`;

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div>
      <div
        className="bg-sub rounded-sm shadow-md hover:shadow-lg hover:scale-105 cursor-pointer transition-all duration-200 relative w-[352px] h-56"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={onMouseEnter}
        onTouchEnd={onMouseLeave}
      >
        <div className="absolute top-4 right-5">
          <DeleteIcon remove={openDeleteModal} />
        </div>
        <div
          className="pt-12 pl-24 pr-3 w-full h-full"
          onClick={() => openDetail(content)}
        >
          <div className="absolute top-[30%] -left-[16%]">
            {img === "" ? (
              <Image
                src={noImage}
                alt=""
                className={isHover ? imgStyle : unhoveredImgStyle}
              />
            ) : (
              <img
                src={img}
                alt=""
                className={isHover ? imgStyle : unhoveredImgStyle}
              />
            )}
          </div>
          <div className="w-full break-words">
            <h3 className="text-md mb-4 font-bold">{content}</h3>
            <p className="text-xs">{translations.join("、 ")}</p>
          </div>
          <div className="flex items-end justify-end gap-8 mt-8">
            <ProficiencyIcon proficiency={proficiency} />
            <Exp exp={exp} proficiency={proficiency} />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} close={closeDeleteModal} zIndex="z-[1000]">
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
