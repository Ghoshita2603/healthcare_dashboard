// src/components/DashboardMainContent/DashboardMainContent.jsx
import React from 'react';
import './DashboardMainContent.css';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import CalendarView from './CalendarView/CalendarView';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import DashboardOverview from './DashboardOverview/DashboardOverview';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="top-section">
        <DashboardOverview className='card' />
        <CalendarView className='card' />
        <ActivityFeed className='card' />
        <UpcomingSchedule className='card' />
      </div>
    </main>
  );
};

export default DashboardMainContent;
