import React from 'react';
import { FaChartLine, FaRegClock, FaUsers, FaLock, FaRocket } from 'react-icons/fa';
import './Why.css';

const Why = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        <h2 className="why-title">Why Choose Credible?</h2>
        <p className="why-subtitle">
          Your financial future deserves the best foundation. We empower our investors with tools,
          transparency, and trust.
        </p>

        <div className="why-cards">
          <div className="why-card card-one">
            <div className="why-card-icon">
              <FaChartLine />
            </div>
            <h3>Expertly Curated Plans</h3>
            <p>
              Our investment plans are designed by professionals to match different financial goals
              and risk levels.
            </p>
          </div>

          <div className="why-card card-two">
            <div className="why-card-icon">
              <FaRegClock />
            </div>
            <h3>Real-Time Tracking</h3>
            <p>
              Monitor your portfolio and performance with real-time updates from our secure
              platform.
            </p>
          </div>

          <div className="why-card card-three">
            <div className="why-card-icon">
              <FaUsers />
            </div>
            <h3>Trusted by Thousands</h3>
            <p>
              With a proven track record and a growing investor community, you're in reliable hands.
            </p>
          </div>

          <div className="why-card card-four">
            <div className="why-card-icon">
              <FaLock />
            </div>
            <h3>Top-Notch Security</h3>
            <p>
              We prioritize security to ensure your investments and personal data are always
              protected.
            </p>
          </div>

          <div className="why-card card-five">
            <div className="why-card-icon">
              <FaRocket />
            </div>
            <h3>Fast Growth Potential</h3>
            <p>
              Unlock the potential of your investments with our innovative and growth-focused
              platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
