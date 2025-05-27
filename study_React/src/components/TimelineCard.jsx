import React from 'react';
import '../main.css'; // Nhập tệp CSS cho các kiểu tĩnh

const TimelineCard = ({ data }) => {
  // Phân tách dữ liệu để truy cập dễ dàng hơn
  const { year, icon: IconComponent, mainText, description, colorScheme } = data;

  return (
    <div className="timeline-card" style={{ backgroundColor: colorScheme.primary }}>
      <div className="timeline-card-header" style={{ backgroundColor: colorScheme.secondary }}>
        {/* Vòng tròn biểu tượng và biểu tượng */}
        <div className="timeline-card-icon-circle" style={{ backgroundColor: colorScheme.accent }}>
          {IconComponent && <IconComponent className="timeline-card-icon" />}
        </div>
        {/* Nhãn năm */}
        <h2 className="timeline-card-year">{year}</h2>
      </div>
      {/* Nội dung thẻ */}
      <div className="timeline-card-content">
        <h3 className="timeline-card-main-text">{mainText}</h3>
        <p className="timeline-card-description">{description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;