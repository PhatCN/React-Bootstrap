import React from "react";
import { FaReact, FaJs, FaCss3Alt, FaBootstrap } from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="my-5 text-center">
      <div className="container">
        <h2 className="mb-4">Skills</h2>
        <div className="row">
          <div className="col-md-3"><FaReact size={50} color="#61DBFB" /><p>React.js</p></div>
          <div className="col-md-3"><FaJs size={50} color="#F7DF1E" /><p>JavaScript</p></div>
          <div className="col-md-3"><FaCss3Alt size={50} color="#2965F1" /><p>HTML & CSS</p></div>
          <div className="col-md-3"><FaBootstrap size={50} color="#563D7C" /><p>Bootstrap</p></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;