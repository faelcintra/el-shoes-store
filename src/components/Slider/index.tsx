import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Slider.css";

type SliderProps = {
  children: React.ReactNode;
  settings: SwiperProps;
};
export function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper
      style={
        {
          "--swiper-navigation-size": "20px",
        } as React.CSSProperties
      }
      modules={[Navigation, Pagination, Autoplay]}
      {...settings}
    >
      {children}
    </Swiper>
  );
}
