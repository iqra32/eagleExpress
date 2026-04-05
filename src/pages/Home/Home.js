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
      </section> {/* ✅ Hero section close */}

      {/* Stats Section */}
   <section className="stats-section">
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',  /* hamesha 2 columns */
    gap: '1rem',
    padding: '2rem 1rem',
  }}>
    {stats.map((stat, i) => (
      <div key={i} className="stat-item" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1rem',
      }}>
        <div className="stat-icon-box">
          {stat.icon}
        </div>
        <p className="stat-label">{stat.label}</p>
        <p className="stat-value">
          <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
        </p>
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
              Eagle Express provides reliable dispatch services to keep your trucks moving and fully loaded. From paperwork to rate negotiation, we handle it all so you can stay focused on driving.
            </p>
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
            <br />
            <Link to="/pricing" className="btn btn-primary">See Our Pricing</Link>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/img.png"
              alt="Eagle Express Dispatch"
              style={{ width: '100%', maxWidth: '500px', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
