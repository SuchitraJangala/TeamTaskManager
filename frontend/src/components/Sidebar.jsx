import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
