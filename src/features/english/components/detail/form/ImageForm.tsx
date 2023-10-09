import { useCallback, useState } from "react";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";

import { EnglishItemForm, Img } from "@/features/english/types";
import ImageSearch from "../../image-search/ImageSearch";
import EnglishImg from "../../english-img/EnglishImg";
import EnglishItemFormContainer from "./EnglishItemFormContainer";
import { Trash2 } from "lucide-react";

type ImageFormProps = {
  isEdit: boolean;
  content: string;
  getValues: UseFormGetValues<EnglishItemForm>;
  setValue: UseFormSetValue<EnglishItemForm>;
};

const ImageForm = ({
  isEdit,
  content,
  getValues,
  setValue,
}: ImageFormProps) => {
  const [imgs, setImgs] = useState<Img[]>(getValues("imgs") ?? []);

  const appendImg = useCallback((img: string) => {
    setImgs((pre) => {
      let newImgs: Img[] = [];

      if (pre.length === 0) {
        newImgs = [...pre, { url: img, is_thumbnail: true }];
      } else {
        newImgs = [...pre, { url: img, is_thumbnail: false }];
      }

      setValue("imgs", newImgs);
      return newImgs;
    });
  }, []);

  const removeImg = (index: number) => {
    setImgs((pre) => {
      const newImgs = pre.filter((_, i) => i !== index);

      if (newImgs.length !== 0 && index === 0) newImgs[0].is_thumbnail = true;

      setValue("imgs", newImgs);

      return newImgs;
    });
  };

  if (isEdit) {
    return (
      <EnglishItemFormContainer title="Image">
        <ImageSearch search={content} setImg={appendImg} />

        <div className="flex gap-10 items-end justify-start flex-wrap">
          {imgs &&
            imgs.map(({ url, is_thumbnail }, index) => (
              <div className="relative">
                <EnglishImg
                  key={`${url}:${index}`}
                  isThumbnail={is_thumbnail}
                  img={url}
                />
                <Trash2
                  className="absolute top-0 -right-6 w-5 h-5 cursor-pointer"
                  onClick={() => removeImg(index)}
                />
              </div>
            ))}
        </div>
      </EnglishItemFormContainer>
    );
  }

  return (
    <EnglishItemFormContainer title="Image">
      {imgs ? (
        imgs.map(({ url, is_thumbnail }, index) => (
          <EnglishImg
            key={`${url}:${index}`}
            isThumbnail={is_thumbnail}
            img={url}
          />
        ))
      ) : (
        <div>イメージがありません</div>
      )}
    </EnglishItemFormContainer>
  );
};

export default ImageForm;
