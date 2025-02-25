import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container">
        <a className="navbar-brand" href="#">Trang chủ</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">Giới thiệu</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Công nghệ</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Dự Án</a></li>
            <li className="nav-item"><a className="nav-link" href="#team">Thành viên</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;