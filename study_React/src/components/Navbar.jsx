import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark w-100 shadow-sm" style={{
      background: "linear-gradient(90deg, #4e54c8, #8f94fb)"
    }}>
      <div className="container">
        {/* Logo / Brand */}
        <a className="navbar-brand fw-bold" href="#">
          ☯ ITO Team ☯
        </a>

        {/* Toggle button khi thu nhỏ */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link fw-semibold hover-nav" href="#about">Giới thiệu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold hover-nav" href="#skills">Công nghệ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold hover-nav" href="#projects">Dự Án</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold hover-nav" href="#team">Thành viên</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
