import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, CircleDollarSign, BarChart } from 'lucide-react';
import { stats } from '../../components/layout/appData/data';
import CountUp from '../../components/CountUp';
import './Home.css';
const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
       <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          Dispatch Track. Deliver Smarter.
        </h1>

        <p className="hero-subtitle">
          Manage your loads, monitor shipments, and get paid faster with a system built for truckers.
        </p>

        <div className="hero-btn">
          <Link to="/contact" className="btn-primary">
            Hire A Dispatcher Today
          </Link>
        </div>
      </div>

      {/* Feature Cards */}
      {/* <div className="hero-cards-container">
        <div className="hero-feature-card">
          <div className="feature-icon">🚚📦</div>
          <h3>Load Sourcing</h3>
          <p>
            Access premium freight opportunities through our strong industry
            connections with brokers, load boards, and direct shippers—ensuring
            consistent and profitable loads.
          </p>
        </div>

        <div className="hero-feature-card">
          <div className="feature-icon">👨‍💼💼</div>
          <h3>Quick Carrier Onboarding</h3>
          <p>
            Get onboarded in minutes with a simple process while our team handles
            all documentation, making your setup smooth and hassle-free.
          </p>
        </div>

        <div className="hero-feature-card">
          <div className="feature-icon">👩‍🔧🚛</div>
          <h3>Dispatch Management</h3>
          <p>
            Our expert dispatchers keep your trucks moving with optimized routes,
            continuous load planning, and complete operational support.
          </p>
        </div>
      </div> */}
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
          <div key={i} className="stat-item">
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
        ))}
      </div>
    </section>


      {/* Why Choose Us */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '5rem 0' }}>
        <div className="container grid md:grid-cols-2 gap-lg items-center">
          <div>
            <h2>Why choose <span className="highlight-text">Eagle Express Dispatch?</span></h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
Dealing with brokers and hunting for loads all the time?
Eagle Express provides reliable dispatch services to keep your trucks moving and fully loaded. From paperwork to rate negotiation, we handle it all  so you can stay focused on driving.            </p>
            <div className="flex flex-col gap-md">
              <div className="flex items-center gap-md">
                <Clock color="var(--accent-primary)" size={24} />
                <p><strong>24/7 Support:</strong> We're always here — day or night.</p>
              </div>
              <div className="flex items-center gap-md">
                <ShieldCheck color="var(--accent-primary)" size={24} />
                <p><strong>All Paperwork Handled:</strong> You drive, we handle the rest.</p>
              </div>
              <div className="flex items-center gap-md">
                <BarChart color="var(--accent-primary)" size={24} />
                <p><strong>Experienced Team:</strong> 11+ years of logistics know-how.</p>
              </div>
              <div className="flex items-center gap-md">
                <CircleDollarSign color="var(--accent-primary)" size={24} />
                <p><strong>Fair Pricing:</strong> No hidden fees. Flat-rate or percent based.</p>
              </div>
            </div>
            <br/>
            <Link to="/pricing" className="btn btn-primary">See Our Pricing</Link>
          </div>
          <div className="flex justify-center items-center">
             <img src="/img.png" alt="Eagle Express Dispatch" style={{ width: '100%', maxWidth: '500px', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
