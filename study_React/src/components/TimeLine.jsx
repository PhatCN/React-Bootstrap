import React, { useEffect } from "react";
import { Chrono } from 'react-chrono';
import timelineData from '../data/timelinedata'; 



const TimelineComponent = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const onScroll = () => {
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add("show");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Quá trình học tập và làm việc</h2>
      <div className="timeline">
        {timelineData.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-year">{event.year}</span>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;