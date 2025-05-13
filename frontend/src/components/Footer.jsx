import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-title">LocalPro</h3>
          <p className="footer-description">Your trusted platform for local service professionals</p>
        </div>
        
        <div className="footer-column">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><Link to="/services/plumbing">Plumbing</Link></li>
            <li><Link to="/services/electrical">Electrical</Link></li>
            <li><Link to="/services/carpentry">Carpentry</Link></li>
            <li><Link to="/services/painting">Painting</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <span className="contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.07.83.23 1.65.46 2.43a2 2 0 01-.45 2.1L8.08 9.3c1.5 3.57 3.57 5.64 7.14 7.14l1.06-1.05a2 2 0 012.1-.45c.78.23 1.6.39 2.43.46A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              1-800-123-4567
            </li>
            <li>
              <span className="contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              support@localpro.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;