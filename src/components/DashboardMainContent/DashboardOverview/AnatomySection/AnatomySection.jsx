// src/components/DashboardMainContent/AnatomySection.jsx
import React from 'react';
import './AnatomySection.css';

// Image path (assuming inside public folder)
const anatomyImageUrl = '/imag/human-body-frontal.jpg';

const healthIndicators = [
  { id: 1, label: 'Healthy Heart', status: 'healthy', top: '23%', left: '70%' },
  { id: 4, label: 'Leg Issue', status: 'healthy', top: '65%', left: '55%' },
];

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image-wrapper">
        <div className="imgs">
          <img
            src={anatomyImageUrl}
            alt="Human Anatomy Illustration"
            className="anatomy-image"
          />
        </div>

        {healthIndicators.map(({ id, label, status, top, left }) => (
          <div
            key={id}
            className={`health-indicator ${status}`}
            style={{ top, left }}
          >
            <div className="bodyinfo">
              <span className="indicator-dot" />
              <span className="indicator-label">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
