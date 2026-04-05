import React from 'react';
import { Link } from 'react-router-dom';
// ...existing imports...
import boxtruckImg from '../assets/boxtruck.jpeg';
import dryvanImg from '../assets/dryvan.jpeg';
import reeferImg from '../assets/reefer.jpeg';
import poweronlyImg from '../assets/poweronly.png';
import hotshotImg from '../assets/hotshot.jpg';
import flatbedImg from '../assets/flatbed.jpeg';

const Services = () => {
  const servicesList = [
    { title: "Box Truck", desc: "Short to mid-range hauls handled expertly, finding profitable loads and navigating market constraints effortlessly.", img: boxtruckImg },
    { title: "Dry Van", desc: "Constant demand, steady loads, and expert route planning to keep your versatile vans rolling.", img: dryvanImg },
    { title: "Reefer", desc: "Temperature-controlled shipments secured with premium rates and strict precision over timing.", img: reeferImg },
    { title: "Power Only", desc: "Connects your tractor with steady, profitable runs matching trailers across multiple broker channels.", img: poweronlyImg },
    { title: "Hotshot", desc: "High-priority, time-sensitive logistics ensuring minimal downtime for owner operators.", img: hotshotImg },
    { title: "Flat Bed / Step Deck", desc: "Specialized load management including permit sourcing, secure strapping details, and optimal routing.", img: flatbedImg },
  ];

  return (
    <div className="animate-fade-in">

      <section className="hero-section">
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '800px', lineHeight: 1.1, color: '#ffffff' }}>
            Our Services

          </h1>
          <p className="hero-subtitle">
            Tailored dispatch services across equipment types — we find the best loads, negotiate rates, and keep your trucks rolling.
          </p>
       
        </div>
      </section>

      <div className="section-padding" style={{ marginTop: '6px', paddingTop: 0 }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Dedicated <span className="highlight-text">Services</span></h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              We serve all major trucking categories, ensuring every haul pays top dollar and remains stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-md lg:grid-cols-3 services-grid">
            {servicesList.map((svc, idx) => (
               <div key={idx} className="card flex flex-col items-center text-center" style={{ padding: 0, minHeight: '220px', overflow: 'hidden' }}>
                 {/* image fills the full card width/height area (cover) so no side whitespace */}
                 <div className="service-icon" style={{ width: '100%', marginBottom: 0, padding: 0 }}>
                   <img
                     src={svc.img}
                     alt={svc.title}
                     style={{
                       width: '100%',
                       height: '160px',
                       objectFit: 'cover',
                       display: 'block'
                     }}
                   />
                 </div>
                 <h3 style={{ marginTop: '0.75rem' }}>{svc.title}</h3>
                 <p style={{ color: 'var(--text-secondary)'}}>{svc.desc}</p>
                 <Link to="/contact" className="btn btn-outline" style={{ marginTop: 'auto', alignSelf: 'center', marginBottom: '15px' }}>Request Dispatch</Link>
               </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
