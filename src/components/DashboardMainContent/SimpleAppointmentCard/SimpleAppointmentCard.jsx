import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, description }) => {
  return (
    <div className="simple-appointment-card">
      <div className="indicator" />
      <div className="appointment-details">
        <h5 className="appointment-title">{title}</h5>
        <div className="line"></div>
        <p className="appointment-time">{time}</p>
        {description && <p className="appointment-desc">{description}</p>}
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
