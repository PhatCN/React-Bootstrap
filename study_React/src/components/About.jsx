import React from "react";
import ImageSlider from "./ImageSlider";

function About() {
  return (
    <section id="about" className="my-5 text-center w-100">
      <div className="container">
        <h2 className="mb-4">Giới thiệu</h2>
        <p className="lead">ITO (Information Technology Outsourcing) là nhóm gia công phần mềm.</p>
      </div>

      <ImageSlider/>
    </section>

  );
}

export default About;
