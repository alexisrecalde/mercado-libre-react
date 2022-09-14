import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "./assets/banner1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function SliderMain() {
  const banners = [
    "../../assets/banner1.jpg",
    "../../assets/banner2.jpg",
    "../../assets/banner3.jpg",
  ];

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {banners.map((e, index) => (
          <SwiperSlide key={index}>
            <img src={e} alt="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
