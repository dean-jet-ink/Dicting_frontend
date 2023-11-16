import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type SliderProps = {
  contents: ReactNode[];
};

const Slider = ({ contents }: SliderProps) => {
  return (
    <div className="w-full overflow-x-hidden">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        className="overflow-visible"
        modules={[Navigation]}
      >
        {contents.map((content, index) => {
          return <SwiperSlide key={index}>{content}</SwiperSlide>;
        })}
      </Swiper>
      <div className="flex items-center justify-start gap-2 mt-10">
        <div className="border border-gray-400 rounded-sm swiper-button-prev">
          <ChevronLeft />
        </div>
        <div className="border border-gray-400 rounded-sm swiper-button-next">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
