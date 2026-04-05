import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutImg from '../../assets/laggageimg.jpg';

const About = () => {
  return (
    <div className="animate-fade-in">

      <section className="hero-section">
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '800px', lineHeight: 1.1, color: '#ffffff' }}>
            About Us

          </h1>
          <p className="hero-subtitle">
            Manage your loads, monitor shipments, and get paid faster with a system built for truckers.
          </p>
       
        </div>
      </section>


      {/* ========== PART 2: CONTENT — Old content restored ========== */}
  <div className="section-padding" style={{ marginTop: '3rem' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-lg items-center">

            <div>
              <h1 className="about-title">
                About <span className="highlight-text">Eagle Express Dispatch</span>
              </h1>
              <p className="about-text">
              Stop wasting time searching for loads or negotiating with brokers.
At Eagle Express Dispatch, we help owner Operators and trucking companies stay on the road with consistent, high paying freight.
              </p>
              <p className="about-text">
              With 11+ years in the industry, we understand what it takes to keep your truck moving.
Our team handles the heavy lifting so you can focus on driving.
              </p>

              <div className="grid grid-cols-2 gap-md about-stats-grid">
                <div>
                  <h2 className="about-stat-number">11+</h2>
                  <p className="about-stat-label">Years Experience</p>
                </div>
                <div>
                  <h2 className="about-stat-number">24/7</h2>
                  <p className="about-stat-label">Dispatch Support</p>
                </div>
              </div>
            </div>

            {/* reviews removed per request */}

            {/* Right side — image */}
            <div className="about-image">
              <img src={aboutImg} alt="About Eagle Express" />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
