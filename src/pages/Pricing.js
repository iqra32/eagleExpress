import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="animate-fade-in">
      <section className="hero-section">
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '800px', lineHeight: 1.1, color: '#ffffff' }}>
            Transparent Pricing
          </h1>
          <p className="hero-subtitle">
            Choose the model that fits your operations best. We offer fair, scalable pricing based on your unique equipment setup.
          </p>
        </div>
      </section>

      <div className="section-padding" style={{ marginTop: '6px', paddingTop: 0 }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              Flexible <span className="highlight-text">Pricing Plans</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              Select the perfect dispatch service model for your trucking business needs
            </p>
          </div>

          {/* Card Container - maxWidth 50% desktop, full width mobile */}
          <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto', padding: '0 1rem' }}>

            <div className="card" style={{ position: 'relative', overflow: 'visible' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: 'var(--accent-primary)', borderRadius: '4px 4px 0 0' }}></div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your Authority</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Price for our truck dispatch services starts from 5% gross revenue depending on your equipment:
              </p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '3rem', padding: 0, listStyle: 'none' }}>
                {[
                  { name: "Box 16 to 26", percent: "7%", rate: "$1.70 per mile" },
                  { name: "Hotshot",       percent: "5%", rate: "$2.50 per mile" },
                  { name: "Dry Van",       percent: "5%", rate: "$3 per mile"    },
                  { name: "Reefer",        percent: "5%", rate: "$3.50 per mile" },
                  { name: "Flatbed",       percent: "5%", rate: "$3 per mile"    },
                  { name: "Step Deck",     percent: "5%", rate: "$3 per mile"    },
                  { name: "Power Only",    percent: "5%", rate: "$3 per mile"    },
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '22px 1fr auto',
                      alignItems: 'center',
                      gap: '10px',
                      minWidth: 0,
                    }}
                  >
                    {/* Icon */}
                    <CheckCircle2 color="var(--accent-primary)" size={18} style={{ flexShrink: 0 }} />

                    {/* Name - Percent */}
                    <span style={{ fontSize: '0.95rem', minWidth: 0 }}>
                      <strong>{item.name}</strong> — {item.percent}
                    </span>

                    {/* Rate */}
                    <span style={{ fontSize: '0.95rem', fontWeight: '500', whiteSpace: 'nowrap', textAlign: 'right' }}>
                      {item.rate}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="btn btn-outline" style={{ width: '100%' }}>Get Started</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
