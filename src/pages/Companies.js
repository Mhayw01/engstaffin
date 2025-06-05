// src/pages/Companies.js
// src/pages/Companies.js
import React from 'react';
import { Link } from 'react-router-dom';
import section1 from '../assets/company-1.svg';
import section2 from '../assets/company-2.svg';
import section3 from '../assets/company-3.svg';
import section4 from '../assets/company-4.svg';
import './Companies.css';

const Companies = () => {
  return (
    <>
      <div className="company-section">
        <img src={section1} alt="Company Section 1" className="responsive-svg" />
      </div>
      <div className="company-section">
        <img src={section2} alt="Company Section 2" className="responsive-svg" />
      </div>
      <div className="company-section">
        <img src={section3} alt="Company Section 3" className="responsive-svg" />
      </div>
      <div className="company-section">
        <img src={section4} alt="Company Section 4" className="responsive-svg" />
      </div>

      {/* New text section */}
      <div className="company-text-section">
        <p className="company-text-pretitle">
          Let’s talk about your next hire<br/>
          and how we’ll make them count.
        </p>
        <Link to="/contact" className="company-text-button">
          GET IN TOUCH
        </Link>
      </div>
    </>
  );
};

export default Companies;
