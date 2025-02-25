import React from "react";

function Projects() {
  return (
    <section id="projects" className="my-5 text-center">
      <div className="container">
        <h2 className="mb-4">Dự Án</h2>
        <p className="lead">Đây là các dự án mà team đã thực hiện:</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Dự án CCJ</h5>
                <p className="card-text">Dự án outsource Nhật. Dự án làm về chế độ chăm sóc người cao tuổi ở Nhật Bản</p>
                <p className="card-footer">(2019 ~ Hiện tại)</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Các dự án OutSource khác</h5>
                <p className="card-text">Là đối tác tin cậy của các Khách hàng Nhật Bản, Malaysia, Mỹ,...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;