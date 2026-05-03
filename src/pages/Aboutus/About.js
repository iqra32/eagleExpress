import React from 'react';
import { Quote, Star } from 'lucide-react';
import './About.css';
import aboutImg from '../../assets/laggageimg.jpg';
import { aboutTestimonials } from '../../components/layout/appData/data';
import ScrollReveal from '../../components/ScrollReveal';

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

      {/* Testimonials — DSI-style section */}
      <section className="about-testimonials-section" aria-labelledby="about-testimonials-heading">
        <div className="container">
          <div className="about-testimonials-intro">
            <ScrollReveal delay={0}>
              <p className="about-testimonials-kicker">Our testimonial</p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 id="about-testimonials-heading" className="about-testimonials-title">
                What our customers say about <span className="highlight-text">excellence</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="about-testimonials-sub">
                Real feedback from carriers who rely on Eagle Express Dispatch to keep freight moving and
                paperwork off their plate.
              </p>
            </ScrollReveal>
          </div>

          <div className="about-testimonials-grid">
            {aboutTestimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={100 + i * 100}>
                <article className="about-testimonial-card">
                  <Quote className="about-testimonial-quote-icon" size={36} strokeWidth={1.25} aria-hidden />
                  <div className="about-testimonial-stars" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        size={16}
                        className="about-testimonial-star"
                        fill="currentColor"
                        strokeWidth={0}
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="about-testimonial-text">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="about-testimonial-footer">
                    <div className="about-testimonial-avatar" aria-hidden>
                      {t.initials}
                    </div>
                    <div>
                      <p className="about-testimonial-name">{t.name}</p>
                      <p className="about-testimonial-role">{t.role}</p>
                    </div>
                  </footer>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
