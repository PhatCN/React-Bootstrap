import React from 'react';
import { Chrono } from 'react-chrono';
import timelineData from '../data/timelinedata'; 
import TimelineCard from './TimelineCard';
import "../main.css";

const TimelineComponent = () => {
  return (
    <div style={{ width: '80%', height: 'auto', margin: '50px auto' }}>
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
        hideControls
      >
        {/* Kết xuất các thành phần TimelineCard tùy chỉnh cho mỗi mục */}
        {timelineData.map((item) => (
          <TimelineCard key={item.id} data={item} />
        ))}
      </Chrono>
    </div>
  );
};

export default TimelineComponent;