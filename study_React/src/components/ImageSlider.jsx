import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../main.css";

const slides = [
  {
    title: "Shaun Matthews",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
  {
    title: "Alexis Berry",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "https://images.unsplash.com/photo-1500643752441-4dc90cda350a",
  },
  {
    title: "Billie Pierce",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "https://images.unsplash.com/photo-1465408953385-7c4627c29435",
  },
  {
    title: "Trevor Copeland",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "https://images.unsplash.com/photo-1538329972958-465d6d2144ed",
  },
  {
    title: "Bernadette Newman",
    caption:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f",
  },
];

const ImageSlider = () => {
  return (
    <div className="slider-container">
      {/* Main Slider */}
      <Swiper
        loop={true}
        modules={[Navigation, Thumbs]}
        navigation
        className="swiper-container"
      >
        {slides.map((slide, index) => (
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
