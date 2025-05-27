import React, { useState } from 'react';
import './CalendarView.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard'

const CalendarView = () => {
  const visibleDays = 7;
  const [startIndex, setStartIndex] = useState(0);

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const timeSlots = ['09:00', '11:00', '13:00', '15:00'];

  const appointments = {
    4: ['09:00', '11:00'],
    12: ['13:00', '15:00'],
    20: ['09:00'],
    28: ['11:00', '15:00'],
  };

  const maxStartIndex = dates.length - visibleDays;

  const handlePrev = () => {
    setStartIndex(prev => (prev - 1 >= 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setStartIndex(prev => (prev + 1 <= maxStartIndex ? prev + 1 : maxStartIndex));
  };

  const visibleDates = dates.slice(startIndex, startIndex + visibleDays);

  return (
    <div className="calendar-wrapper">
      <h3 className="calendar-title">
        October 2021
        <div className="slidebtn">
          <button className="slider-btn" onClick={handlePrev} disabled={startIndex === 0}>
            <FaChevronLeft />
          </button>
          <button className="slider-btn" onClick={handleNext} disabled={startIndex === maxStartIndex}>
            <FaChevronRight />
          </button>
        </div>
      </h3>

      <div className="weekdays-row">
        {visibleDates.map((date, idx) => {
          const weekdayIndex = (4 + startIndex + idx) % 7;
          return (
            <div key={date} className="weekday-box">
              {weekDays[weekdayIndex]}
            </div>
          );
        })}
      </div>

      <div className="calendar-slider">
        <div className="calendar-days">
          {visibleDates.map((date) => (
            <div key={date} className="day-column">
              <div className="day-box">{date}</div>
              {timeSlots.map((slot, idx) => {
                const isBooked = appointments[date]?.includes(slot);
                return (
                  <div
                    key={idx}
                    className={`time-slot ${isBooked ? 'has-appointment' : ''}`}
                  >
                    {slot}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="appointment-details">
        <h4>Appointment Details</h4>
        <div className="box">
          <div className="appointment-card">
            <SimpleAppointmentCard
              time="09:00 AM"
              title="Dentist"
              description="Dr. Smith - Room 101"
            />
          </div>
          <div className="appointment-card">
            <SimpleAppointmentCard
              time="09:00 AM"
              title="Physiotherapy Appointment"
              description="Dr. Smith - Room 101"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
