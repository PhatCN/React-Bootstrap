import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function SidebarToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="d-flex">
      {/* Nút Toggle */}
      <button
        className="btn btn-dark position-fixed"
        style={{ top: "10px", left: "10px", zIndex: "1050" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        &#9776;
      </button>

      {/* Sidebar */}
      <div
        className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ width: "180px", height: "auto", zIndex: "1040" }}
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            onClick={() => setIsOpen(false)}
          ></button>
        </div>
        <div className="offcanvas-body p-2">
          <ul className="list-group small">
            <li className="list-group-item p-1 border-0 bg-light text-dark"
                style={{ cursor: "pointer" }}
                onClick={() => setIsOpen(false)}>
              Home
            </li>
            <li className="list-group-item p-1 border-0 bg-light text-dark"
                style={{ cursor: "pointer" }}
                onClick={() => setIsOpen(false)}>
              About
            </li>
            <li className="list-group-item p-1 border-0 bg-light text-dark"
                style={{ cursor: "pointer" }}
                onClick={() => setIsOpen(false)}>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
