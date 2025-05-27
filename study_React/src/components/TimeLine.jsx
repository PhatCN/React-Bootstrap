import React from 'react';
import { Chrono } from 'react-chrono';
import timelineData from '../data/timelinedata'; 
import TimelineCard from './TimelineCard';
import "../main.css";

const TimelineComponent = () => {
  return (
    <div className='timeline-component'>
    <div className='timeline-header-title'>Timeline nè</div>
      <Chrono
        items={timelineData}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: '#A9A9A9',
          secondary: '#D3D3D3', 
          cardBgColor: 'transparent',
          titleColor: '#333',
          titleColorActive: '#333', 
        }}
        hideControls = {true}
      >
        {timelineData.map((item) => (
          <TimelineCard key={item.id} data={item} />
        ))}
      </Chrono>
    </div>
  );
};

export default TimelineComponent;