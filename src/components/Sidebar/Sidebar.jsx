// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import {
  LayoutDashboard,
  Clock,
  Calendar,
  CalendarCheck,
  BarChart2,
  FlaskConical,
  MessageCircle,
  LifeBuoy,
  Settings,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { label: 'History', icon: <Clock size={18} /> },
  { label: 'Calendar', icon: <Calendar size={18} /> },
  { label: 'Appointments', icon: <CalendarCheck size={18} /> },
  { label: 'Statistics', icon: <BarChart2 size={18} /> },
  { label: 'Tests', icon: <FlaskConical size={18} /> },
  { label: 'Chat', icon: <MessageCircle size={18} /> },
  { label: 'Support', icon: <LifeBuoy size={18} /> },
  { label: 'Setting', icon: <Settings size={18} /> },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">General</h2>
      <nav className="nav-links">
        {navItems.map((item, index) => (
          <div className="nav-item" key={index}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
