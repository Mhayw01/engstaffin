// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/engstaff-in-logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="EngStaff Logo" className="navbar-logo" />
          </Link>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`navbar-center${menuOpen ? ' open' : ''}`}>
          <Link to="/candidates" className="nav-link" onClick={toggleMenu}>
            Candidates
          </Link>
          <Link to="/companies" className="nav-link" onClick={toggleMenu}>
            Companies
          </Link>
          <Link to="/aboutus" className="nav-link" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" className="contact-button" onClick={toggleMenu}>
            GET IN TOUCH
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;