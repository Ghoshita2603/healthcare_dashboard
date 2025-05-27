// src/components/Header.jsx
import React from 'react';
import './Header.css';
import { Bell, Plus } from 'lucide-react'; // Lucide icons

const Header = () => {
  return (
    <header className="header">
      {/* Left side: Logo */}
      <div className="header-left">
        <h1 className="logo">Health<span>Care.</span> </h1>
      </div>

      {/* Center: Search bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." disabled />
      </div>

      {/* Right side: Icons and user profile */}
      <div className="header-right">
        <button className="add-btn" title="Add">
          <Plus size={20} />
        </button>

        <div className="notification">
          <Bell size={20} />
        </div>

        <div className="user-profile">
          <img
            src="https://i.pravatar.cc/150?img=32" // static avatar
            alt="User Avatar"
            className="avatar"
          />
          <span className="username">Dr. Emily</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
