import { AiFillCreditCard } from "react-icons/ai";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { Slider } from "../Slider";

import { SwiperSlide } from "swiper/react";

export function NavText() {
  const pitchTexts = [
    {
      icon: <BsFillBoxSeamFill className="w-6 h-6" />,
      textBold: "Frete grátis",
      textRest: "para todo o Brasil.",
    },
    {
      icon: <AiFillCreditCard className="w-6 h-6" />,
      textBold: "Parcele",
      textRest: "em até 10 vezes sem juros.",
    },
    {
      icon: <RiCoupon2Fill className="w-6 h-6" />,
      textBold: "CUPOM 10% OFF",
      textRest: "para todas as compras.",
    },
  ];

  return (
    <>
      <div
        aria-label="pitch-bar"
        className="flex items-center justify-center bg-gray-200 w-full h-16 mb-2"
      >
        <Slider
          settings={{
            slidesPerView: 1,
            spaceBetween: 50,
            pagination: {
              clickable: true,
            },
            autoplay: { delay: 4000 },
          }}
        >
          {pitchTexts.map((item, index) => (
            <SwiperSlide key={index}>
              <span className="mr-4 flex items-center justify-center">
                {item.icon}
              </span>
              <span>
                <span className="font-bold">{item.textBold} </span>
                {item.textRest}
              </span>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </>
  );
}
