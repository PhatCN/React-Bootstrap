import React from "react";
import teamData from "../data/datateam.js"


function Team() {
  return (
    <section id="team" className="my-5 text-center w-100">
      <div className="container">
        <h2 className="mb-5 pb-3">Our Team</h2>
        <div className="row justify-content-center">
          {teamData.map((member, index) => (
            <div key={index} className="col-md-4 mb-5 d-flex align-items-stretch">
              <div className="card shadow p-4 bg-white text-dark border-0 rounded-lg position-relative w-100">
                <div className="d-flex justify-content-center position-relative team-member-img">
                  <img 
                    src={member.image} 
                    className="rounded-circle border shadow-lg" 
                    alt={member.name} 
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body text-center mt-3">
                  <h5 className="card-title font-weight-bold">{member.name}</h5>
                  <p className="text-muted font-italic">{member.position}</p>
                  <p className="card-text small">{member.skills}</p>
                  <p className="card-text small">{member.experience} experience</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  export default Team;