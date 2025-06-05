// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import section1 from '../assets/home-1.svg';
import section2 from '../assets/home-2.svg';
import section3 from '../assets/home-3.svg';
import section4 from '../assets/home-4.svg';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-section">
        <img src={section1} alt="Section 1" className="responsive-svg" />
      </div>
      <div className="home-section">
        <img src={section2} alt="Section 2" className="responsive-svg" />
      </div>
      <div className="home-section">
        <img src={section3} alt="Section 3" className="responsive-svg" />
      </div>
      <div className="home-section">
        <img src={section4} alt="Section 4" className="responsive-svg" />
      </div>
      {/* New text section */}
      <div className="home-section text-section">
        <p className="text-section-pretitle">Ready to build a new team?</p>
        <p className="text-section-title">
          Because the best builds come from aligned, cross-functional teams — led by people who know how to unite them.
        </p>
        <Link to="/contact" className="text-section-button">
          GET IN TOUCH
        </Link>
      </div>
    </>
  );
};

export default Home;