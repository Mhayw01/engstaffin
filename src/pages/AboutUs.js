// src/pages/AboutUs.js
import React from 'react';
import section1 from '../assets/about-1.svg';
import section2 from '../assets/about-2.svg';
import section3 from '../assets/about-3.svg';
import section4 from '../assets/about-4.svg';
import section5 from '../assets/about-5.svg';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <div className="about-section">
        <img src={section1} alt="About Section 1" className="responsive-svg" />
      </div>
      <div className="about-section">
        <img src={section2} alt="About Section 2" className="responsive-svg" />
      </div>
      <div className="about-section">
        <img src={section3} alt="About Section 3" className="responsive-svg" />
      </div>
      <div className="about-section">
        <img src={section4} alt="About Section 4" className="responsive-svg" />
      </div>
      <div className="about-section">
        <img src={section5} alt="About Section 5" className="responsive-svg" />
      </div>
    </>
  );
};

export default AboutUs;
