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
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Flexible <span className="highlight-text">Pricing Plans</span></h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              Select the perfect dispatch service model for your trucking business needs
            </p>
          </div>

        <div className="grid md:grid-cols-1 gap-lg" style={{ maxWidth: '50%', margin: '0 auto' }}>
          
          {/* Dispatch Under Your Authority */}
          <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: 'var(--accent-primary)' }}></div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your Authority</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Price for our truck dispatch services starts from 5% gross revenue depending on your equipment:
            </p>
            
       <ul className="flex flex-col gap-3" style={{ listStyle: 'none', marginBottom: '3rem' }}>

  {/* Box */}
  <li className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <CheckCircle2 color="var(--accent-primary)" size={20} />
      <span><strong>Box 16 to 26</strong> - 7%</span>
    </div>
    <span className="font-medium">$1.70 per mile</span>
  </li>

  {/* Hotshot */}
  <li className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <CheckCircle2 color="var(--accent-primary)" size={20} />
      <span><strong>Hotshot</strong> - 5%</span>
    </div>
    <span className="font-medium">$2.50 per mile</span>
  </li>

  {/* Dry Van */}
  <li className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <CheckCircle2 color="var(--accent-primary)" size={20} />
      <span><strong>Dry Van</strong> - 5%</span>
    </div>
    <span className="font-medium">$3 per mile</span>
  </li>

  {/* Reefer */}
  <li className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <CheckCircle2 color="var(--accent-primary)" size={20} />
      <span><strong>Reefer</strong> - 5%</span>
    </div>
    <span className="font-medium">$3.50 per mile</span>
  </li>

  {/* Flatbed */}
  <li className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <CheckCircle2 color="var(--accent-primary)" size={20} />
      <span><strong>Flatbed</strong> - 5%</span>
    </div>
    <span className="font-medium">$3 per mile</span>
  </li>

  {/* Step Deck */}
  <li className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <CheckCircle2 color="var(--accent-primary)" size={20} />
      <span><strong>Step Deck</strong> - 5%</span>
    </div>
    <span className="font-medium">$3 per mile</span>
  </li>

  {/* Power Only */}
  <li className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <CheckCircle2 color="var(--accent-primary)" size={20} />
      <span><strong>Power Only</strong> - 5%</span>
    </div>
    <span className="font-medium">$3 per mile</span>
  </li>

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
