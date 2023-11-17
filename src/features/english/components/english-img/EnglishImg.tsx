import Img from "@/components/image/Img";

type EnglishImgProps = {
  isThumbnail: boolean;
  img: string;
  SelectImg: (img: string) => void;
  openZoomImg: () => void;
};

const EnglishImg = ({
  isThumbnail,
  img,
  SelectImg,
  openZoomImg,
}: EnglishImgProps) => {
  const onClickImg = () => {
    SelectImg(img);
    openZoomImg();
  };

  return (
    <div>
      {isThumbnail ? (
        <div className="text-center cursor-pointer" onClick={onClickImg}>
          <div className="border border-accent">
            <Img img={img} className="object-cover w-48 h-40" />
          </div>
          <p className="text-xs mt-1">thumbnail</p>
        </div>
      ) : (
        <div className="cursor-pointer" onClick={onClickImg}>
          <Img img={img} className="object-cover w-48 h-40" />
        </div>
      )}
    </div>
  );
};

export default EnglishImg;
