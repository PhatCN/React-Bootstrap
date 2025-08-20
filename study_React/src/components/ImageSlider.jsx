import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import dataSilde from "../data/dataSilde.js";

const ImageSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        className="swiper-container"
      >
        {dataSilde.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-bgimg"
              style={{ backgroundImage: `url(${slide.img})` }}
            ></div>
            <div className="content">
              <p className="title">{slide.title}</p>
              <span className="caption">{slide.caption}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
