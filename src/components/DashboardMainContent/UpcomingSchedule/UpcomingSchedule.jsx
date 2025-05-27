import React from 'react';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-title">The Upcoming Schedule</h3>

      <div className="day-section">
        <h4>On Thursday</h4>
        <div className="box">
          <SimpleAppointmentCard
            time="09:00 AM"
            title="Cardiologist Appointment"
            description="Dr. Smith - Room 101"
          />
          <SimpleAppointmentCard
            time="11:30 AM"
            title="Blood Test"
            description="Lab 3 - Building A"
          />
        </div>

      </div>

      <div className="day-section">
        <h4>On Saturday</h4>
        <div className="box">
          <SimpleAppointmentCard
            time="10:00 AM"
            title="Physiotherapy Session"
            description="Dr. Adams - Room 210"
          />
          <SimpleAppointmentCard
            time="01:00 PM"
            title="Dental Cleaning"
            description="Dr. Lee - Room 305"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
