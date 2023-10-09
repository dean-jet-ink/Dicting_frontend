import Modal from "@/components/modal/Modal";
import { Img } from "../../types/index";
import { useState } from "react";

type EnglishImgProps = {
  isThumbnail: boolean;
  img: string;
};

const EnglishImg = ({ isThumbnail, img }: EnglishImgProps) => {
  const [isOpen, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      {isThumbnail ? (
        <div className="text-center cursor-pointer relative" onClick={open}>
          <p className="text-xs mb-1 absolute -top-4 right-0 left-0">
            thumbnail
          </p>
          <div className="border border-accent">
            <img src={img} alt="" className="object-cover w-28 h-20" />
          </div>
        </div>
      ) : (
        <div className="cursor-pointer" onClick={open}>
          <img src={img} alt="" className="object-cover w-28 h-20" />
        </div>
      )}

      <Modal isOpen={isOpen} close={close}>
        <img src={img} alt="" className="mt-5" />
      </Modal>
    </>
  );
};

export default EnglishImg;
