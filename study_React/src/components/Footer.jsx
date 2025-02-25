import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2025 John Doe. All Rights Reserved.</p>
        <div>
          <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
          <a href="#" className="text-white me-3"><FaLinkedin size={24} /></a>
          <a href="#" className="text-white"><FaGithub size={24} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
