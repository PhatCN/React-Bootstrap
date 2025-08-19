import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className="projects-section my-5 text-center">
      <div className="container">
        <h2 className="projects-title mb-4">Dự Án</h2>
        <p className="lead mb-5">
          Đây là một số dự án tiêu biểu mà team chúng tôi đã thực hiện
        </p>
        <div className="row">
          <div className="col-md-4 mb-4" data-aos="fade-up">
            <div className="card project-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqh50SKNUpq7s_HI54u6UYtd4J9PY-mdOgA&s"
                alt="Kaigo Project"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="project-title">Dự án XXX</h5>
                <p className="card-text">
                  Một dự án Outsource Nhật về chế độ chăm sóc người cao tuổi
                  (Kaigo). Hệ thống giúp quản lý và hỗ trợ y tế.
                </p>
                <p className="project-footer">(2019 ~ Hiện tại)</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="150">
            <div className="card project-card">
              <img
                src="https://png.pngtree.com/png-clipart/20250107/original/pngtree-outsourcing-icon-design-template-vector-isolated-png-image_4130788.png"
                alt="Outsource Projects"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="project-title">Outsource Quốc Tế</h5>
                <p className="card-text">
                  Đối tác tin cậy của khách hàng Nhật Bản, Malaysia, Mỹ...
                  Thực hiện nhiều dự án WebApp, Mobile App và AI.
                </p>
                <p className="project-footer">(2017 ~ nay)</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card project-card">
              <img
                src="https://www.shutterstock.com/image-photo/kiev-ukraine-january-29-2017-260nw-576283471.jpg"
                alt="Mobile Projects"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="project-title">Ứng dụng Mobile</h5>
                <p className="card-text">
                  Xây dựng app Android/iOS cho khách hàng startup và doanh
                  nghiệp: thương mại điện tử, giáo dục, y tế, v.v.
                </p>
                <p className="project-footer">(2020 ~ nay)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
