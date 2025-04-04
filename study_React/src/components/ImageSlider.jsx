import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../main.css";
import dataSilde from "../data/dataSilde.js"

const ImageSlider = () => {
  return (
    <div className="slider-container">
      {/* Main Slider */}
      <Swiper
        loop={true}
        modules={[Navigation,Thumbs, Pagination, Autoplay]}
        autoplay={{
          delay: 3000, // Thời gian chuyển slide (3 giây)
          disableOnInteraction: false, // Giữ autoplay ngay cả khi user tương tác
      }}
      navigation={true}
      pagination={{ clickable: true }}
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
