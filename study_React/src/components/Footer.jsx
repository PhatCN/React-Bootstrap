import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
   <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-name">Châu Nhuận Phát</h2>
        <div className="footer-social">
          <a href="https://www.facebook.com/cnphat.157" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
        <p className="footer-copy">© 2025 | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
