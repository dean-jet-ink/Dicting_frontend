import { useCallback, useState } from "react";
import { UseFieldArrayReturn } from "react-hook-form";

import { EnglishItemForm, Img } from "@/features/english/types";
import ImageSearch from "../../image-search/ImageSearch";
import EnglishImg from "../../english-img/EnglishImg";
import EnglishItemContainer from "../../../../../components/container/EnglishItemContainer";
import { Trash } from "lucide-react";
import Slider from "@/components/slider/Slider";
import Modal from "@/components/modal/Modal";

type ImageFormProps = {
  isEdit: boolean;
  content: string;
  imgs: Img[];
  imgFields: UseFieldArrayReturn<EnglishItemForm, "imgs", "id">;
};

const ImageForm = ({
  isEdit,
  content,
  imgs,
  imgFields: { fields, update, append, remove },
}: ImageFormProps) => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const [selectedImg, setSelectedImg] = useState("");

  const SelectImg = (img: string) => {
    setSelectedImg(img);
  };

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  const appendImg = useCallback(
    (url: string) => {
      if (fields.length === 0) {
        append({ url, is_thumbnail: true });
      } else {
        append({ url, is_thumbnail: false });
      }
    },
    [fields]
  );

  const removeImg = (index: number) => {
    if (index === 0 && fields.length > 1) {
      update(1, { ...fields[1], is_thumbnail: true });
    }

    remove(index);
  };

  if (isEdit) {
    return (
      <EnglishItemContainer title="Image">
        <ImageSearch search={content} setImg={appendImg} />

        <div className="flex gap-10 items-end justify-start flex-wrap mt-8">
          {fields.length !== 0 && (
            <Slider
              contents={fields.map(({ id, url, is_thumbnail }, index) => (
                <div key={id} className="relative">
                  <EnglishImg
                    isThumbnail={is_thumbnail}
                    img={url}
                    SelectImg={SelectImg}
                    openZoomImg={openModal}
                  />
                  <div
                    className="w-fit p-1 rounded-full bg-sub border border-gray-300 absolute top-1 right-1 cursor-pointer"
                    onClick={() => removeImg(index)}
                  >
                    <Trash className="w-5 h-5" />
                  </div>
                </div>
              ))}
            />
          )}
        </div>

        {isOpen && (
          <Modal isOpen={isOpen} close={closeModal} bg="bg-transparent">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selectedImg} alt="" className="mt-5 m-auto" />
          </Modal>
        )}
      </EnglishItemContainer>
    );
  }

  return (
    <EnglishItemContainer title="Image">
      {imgs && imgs.length !== 0 ? (
        <Slider
          contents={imgs.map(({ url, is_thumbnail }, index) => (
            <EnglishImg
              key={`${url}:${index}`}
              isThumbnail={is_thumbnail}
              img={url}
              SelectImg={setSelectedImg}
              openZoomImg={openModal}
            />
          ))}
        />
      ) : (
        <div>イメージがありません</div>
      )}

      <Modal isOpen={isOpen} close={closeModal} bg="bg-transparent">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={selectedImg} alt="" className="mt-5" />
      </Modal>
    </EnglishItemContainer>
  );
};

export default ImageForm;
