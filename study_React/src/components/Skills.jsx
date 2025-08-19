import React from "react";
import { FaReact, FaJava, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiBootstrap, SiCss3 } from "react-icons/si";
import { VscCode } from "react-icons/vsc";


const skills = [
  { name: "React.js", icon: <FaReact color="#61DBFB" size={50} /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={50} /> },
  { name: "HTML & CSS", icon: <SiCss3 color="#2965f1" size={50} /> },
  { name: "Bootstrap", icon: <SiBootstrap color="#7952b3" size={50} /> },
  { name: "C#", icon: <VscCode color="#a855f7" size={50} /> },
  { name: "Java", icon: <FaJava color="#f89820" size={50} /> },
  { name: "SQL", icon: <FaDatabase color="#00758f" size={50} /> },
];

function Skills() {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">Skills</h2>
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-md-3 mb-4">
            <div className="p-3 border rounded shadow-sm skill-card">
              {skill.icon}
              <p className="mt-2 fw-bold">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
