// src/components/DashboardMainContent/DashboardOverview.jsx
import React from 'react';
import AnatomySection from './AnatomySection/AnatomySection';
import HealthStatusCards from './HealthStatusCards/HealthStatusCards';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import './DashboardOverview.css';
import Header from '../../Header/Header';

const DashboardOverview = () => {
  return (
    <section className="dashboard-overview">
      <div className="section">
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </section>
  );
};

export default DashboardOverview;
