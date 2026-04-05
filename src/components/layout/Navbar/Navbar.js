import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkClass = (path, baseClass) => {
    return location.pathname === path ? `${baseClass} active` : baseClass;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact us', path: '/contact' }
  ];

  return (
    <header className="navbar-header">
      <div className="container flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-sm navbar-brand">
          <img src="/logo.png" alt="Eagle Express" className="navbar-logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="flex items-center gap-lg desktop-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={getLinkClass(link.path, "navbar-link")}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:912-200-8911" className="btn btn-primary navbar-cta">
            <Phone size={18} />
            912-200-8911
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu} 
          className="mobile-toggle"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="container flex flex-col gap-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={getLinkClass(link.path, "mobile-link")}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:912-200-8911" className="btn btn-primary mobile-cta" onClick={() => setIsOpen(false)}>
              <Phone size={18} />
              912-200-8911
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
