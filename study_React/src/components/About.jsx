import React from "react";
import ImageSlider from "./ImageSlider";

function About() {
  return (
    <section id="about" className="about-section py-5 w-100">
      <div className="container text-center">
        {/* Text giới thiệu */}
        <div className="about-text mb-5" data-aos="fade-up">
          <h2 className="mb-4 fw-bold">Giới thiệu</h2>
          <p className="lead">
            <b>CNP (Châu Nhuận Phát)</b> – một developer yêu code và đam mê sáng tạo,
            luôn tìm kiếm giải pháp tối ưu cho khách hàng. 💻🚀
          </p>
          <p>
            Kinh nghiệm trong <b>Web Development</b>, <b>Mobile App</b>, và{" "}
            <b>Outsourcing</b>.  
            Đặc biệt, thích học công nghệ mới và chia sẻ kiến thức cùng anh em dev.
          </p>
          <p className="quote">
            <i>"Code hard – Play harder 😎"</i>
          </p>
        </div>

        {/* Slider */}
        <div className="about-slider" data-aos="zoom-in-up">
          <ImageSlider />
        </div>
      </div>
    </section>
  );
}

export default About;
