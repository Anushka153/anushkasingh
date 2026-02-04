import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          ANUSHKA<span>.</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/experience" className={`nav-link ${isActive('/experience')}`}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`}>
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
