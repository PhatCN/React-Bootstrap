import React from "react";

function Header() {
  return (
    <header className="header text-white text-center">
      <div className="overlay">
        <div className="container">
          <h1 className="header-title">CHAU NHUAN PHAT</h1>
          <p className="lead typing-text">
            Kĩ sư gia công phần mềm | WebApp | PC App | Android - iOS App
          </p>
          <p className="lead fade-in-text">
            (^.^) Bạn muốn gì - Tôi cũng có (^.^)
          </p>
          <a href="#about"><button className="cta-btn">Xem Thêm</button></a>
          
        </div>
      </div>
      <div className="custom-shape-divider"></div>
    </header>
  );
}

export default Header;
