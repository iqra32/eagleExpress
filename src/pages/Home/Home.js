import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, CircleDollarSign, BarChart } from 'lucide-react';
import { stats } from '../../components/layout/appData/data';
import CountUp from '../../components/CountUp';
import ScrollReveal from '../../components/ScrollReveal';
import './Home.css';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
       <section className="hero-section">
      <div className="container">
        <ScrollReveal delay={0}>
          <h1 className="hero-title">
            Dispatch Track. Deliver Smarter.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <p className="hero-subtitle">
            Manage your loads, monitor shipments, and get paid faster with a system built for truckers.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={280}>
          <div className="hero-btn">
            <Link to="/contact" className="btn-primary">
              Hire A Dispatcher Today
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Feature Cards */}
 
    </section>
      {/* <section className="hero-section">
        <div className="container">
         
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '800px', lineHeight: 1.1 }}>
Dispatch Track. Deliver Smarter.
          </h1>
          <p className="hero-subtitle">
Manage your loads, monitor shipments, and get paid faster with a system built for truckers.          </p>
          <div className="flex gap-md mt-8">
            <Link to="/contact" className="btn" style={{ background: 'var(--accent-tertiary)', color: '#000', fontWeight: 'bold', padding: '1rem 2rem' }}>Hire A Dispatcher Today</Link>
          </div>
        </div>

        <div className="hero-cards-container">
          <div className="hero-feature-card">
            <div className="feature-icon-wrapper">
               🚚📦
            </div>
            <h3>Load Sourcing</h3>
            <p>Access premium freight opportunities through our strong industry connections with brokers, load boards, and direct shippers—ensuring consistent and profitable loads.</p>
          </div>
          <div className="hero-feature-card">
            <div className="feature-icon-wrapper">
               👨‍💼💼
            </div>
            <h3>Quick Carrier Onboarding</h3>
            <p>Get onboarded in minutes with a simple process while our team handles all documentation, making your setup smooth and hassle-free.</p>
          </div>
          <div className="hero-feature-card">
            <div className="feature-icon-wrapper">
               👩‍🔧🚛
            </div>
            <h3>Dispatch Management</h3>
            <p>Our expert dispatchers keep your trucks moving with optimized routes, continuous load planning, and complete operational support</p>
          </div>
        </div>
      </section> */}
      {/* Stats Section */}
      <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <ScrollReveal key={i} delay={i * 90} className="stat-item-reveal">
            <div className="stat-item">
              <div className="stat-icon-box">
                {stat.icon}
              </div>
              <div>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">
                  <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>


      {/* Why Choose Us */}
      <section className="home-why-section">
        <div className="container grid md:grid-cols-2 gap-lg items-center">
          <div>
            <ScrollReveal delay={0}>
              <h2>Why choose <span className="highlight-text">Eagle Express Dispatch?</span></h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="home-why-lead">
                Dealing with brokers and hunting for loads all the time?
                Eagle Express provides reliable dispatch services to keep your trucks moving and fully loaded. From paperwork to rate negotiation, we handle it all so you can stay focused on driving.
              </p>
            </ScrollReveal>
            <div className="flex flex-col gap-md">
              {[
                { Icon: Clock, text: <><strong>24/7 Support:</strong> We&apos;re always here — day or night.</> },
                { Icon: ShieldCheck, text: <><strong>All Paperwork Handled:</strong> You drive, we handle the rest.</> },
                { Icon: BarChart, text: <><strong>Experienced Team:</strong> 11+ years of logistics know-how.</> },
                { Icon: CircleDollarSign, text: <><strong>Fair Pricing:</strong> No hidden fees. Flat-rate or percent based.</> },
              ].map(({ Icon, text }, i) => (
                <ScrollReveal key={i} delay={180 + i * 90}>
                  <div className="flex items-center gap-md">
                    <Icon color="var(--accent-primary)" size={24} />
                    <p>{text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={520}>
              <br />
              <Link to="/pricing" className="btn btn-primary">See Our Pricing</Link>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200}>
            <div className="flex justify-center items-center">
              <img src="/img.png" alt="Eagle Express Dispatch" className="home-why-img" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
