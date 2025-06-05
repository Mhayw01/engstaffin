// src/pages/Candidates.js
import React from 'react';
import { Link } from 'react-router-dom';
import section1 from '../assets/candidate-1.svg';
import section2 from '../assets/candidate-2.svg';
import section3 from '../assets/candidate-3.svg';
import section4 from '../assets/candidate-4.svg';
import './Candidates.css';

const Candidates = () => {
  return (
    <>
      <div className="candidate-section">
        <img src={section1} alt="Candidate Section 1" className="responsive-svg" />
      </div>
      <div className="candidate-section">
        <img src={section2} alt="Candidate Section 2" className="responsive-svg" />
      </div>
      <div className="candidate-section">
        <img src={section3} alt="Candidate Section 3" className="responsive-svg" />
      </div>
      <div className="candidate-section">
        <img src={section4} alt="Candidate Section 4" className="responsive-svg" />
      </div>
      {/* New text section */}
      <div className="candidate-text-section">
        <p className="candidate-text-pretitle">Let’s talk about what you want to build next.</p>
        <Link to="/contact" className="candidate-text-button">
          GET IN TOUCH
        </Link>
      </div>
    </>
  );
};

export default Candidates;
