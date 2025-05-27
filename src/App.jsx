// src/App.jsx
import React from 'react';
import './index.css'; // Global styles if needed

import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
