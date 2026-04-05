import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container grid md:grid-cols-3 gap-lg">
        
        {/* Brand */}
        <div className="flex flex-col gap-sm">
          <Link to="/" className="flex items-center gap-sm footer-brand">
            <img src="/logo.png" alt="Eagle Express" className="footer-logo" />
          </Link>
          <p className="footer-text">
            We simplify your trucking business. With DispatchPro, you stay in control from load assignment to real-time tracking and payments.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-sm">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links-list">
            <li><Link to="/about" className="footer-link-item">About us</Link></li>
            <li><Link to="/services" className="footer-link-item">Services</Link></li>
            <li><Link to="/pricing" className="footer-link-item">Pricing</Link></li>
            <li><Link to="/contact" className="footer-link-item">Contact us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-sm">
          <h3 className="footer-heading">Contact Info</h3>
          <div className="flex flex-col gap-sm footer-contact-info">
            <div className="flex items-center gap-sm">
              <Phone size={18} color="#ffffff"/>
              <a href="tel:912-200-8911">912-200-8911</a>
            </div>
            <div className="flex items-center gap-sm">
              <Mail size={18} color="#ffffff" />
              <a href="mailto:alexcarter.pts@gmail.com" className="contact-link">alexcarter.pts@gmail.com</a>
            </div>
            <div className="flex items-start gap-sm">
              <MapPin size={18} color="#ffffff" />
              <div>
                <div className="footer-address-label">Address</div>
                <div className="footer-address-text">2781 CYPRESS AVE EAST MEADOW NEW YORK</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-copy">Copyright © {new Date().getFullYear()} Dispatch Services Inc. | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
