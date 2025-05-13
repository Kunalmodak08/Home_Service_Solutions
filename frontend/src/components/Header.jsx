import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <div className="logo-container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" fill="#2563EB" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12h6v10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>LocalPro</span>
          </div>
        </Link>
      </div>
      
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/services" className="nav-item">Services</Link>
        <Link to="/how-it-works" className="nav-item">How it works</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      
      <div className="auth-buttons">
        <Link to="/login" className="login-link">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;