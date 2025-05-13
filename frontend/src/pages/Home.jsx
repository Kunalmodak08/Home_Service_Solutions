import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Find Local Service Professionals in Minutes</h1>
          <p className="hero-subtitle">Connect with verified local service providers for all your home maintenance needs</p>
          
          <div className="search-container">
            <div className="search-inputs">
              <div className="input-group">
                <select className="search-select">
                  <option value="">Select Service</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="carpentry">Carpentry</option>
                  <option value="painting">Painting</option>
                </select>
              </div>
              
              <div className="input-group">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Enter your location"
                />
                <span className="location-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              
              <div className="input-group">
                <select className="search-select">
                  <option value="">Urgency Level</option>
                  <option value="emergency">Emergency</option>
                  <option value="urgent">Urgent</option>
                  <option value="standard">Standard</option>
                  <option value="flexible">Flexible</option>
                </select>
                <span className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 16v-4m0-4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>
            </div>
            
            <button className="search-btn">Find Professionals</button>
          </div>
        </div>
      </section>
      
      <section className="popular-services">
        <h2 className="section-title">Popular Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon plumbing">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2v8l4-4v4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 14h-4v4h4v-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 14v-3l-4 4v5h8v-6h-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Plumbing</h3>
            <p>20+ Available</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon electrical">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Electrical</h3>
            <p>15+ Available</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon carpentry">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21l9-9m-9 9h6v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 8l7-7 5 5-7 7-5-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Carpentry</h3>
            <p>12+ Available</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon painting">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 3L12 18l-2-4-4-2 15-9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Painting</h3>
            <p>18+ Available</p>
          </div>
        </div>
      </section>
      
      <section className="professionals">
        <h2 className="section-title">Available Professionals</h2>
        <div className="professionals-grid">
          <div className="professional-card">
            <div className="professional-image">
              <img src="/api/placeholder/80/80" alt="John Smith" />
            </div>
            <div className="professional-info">
              <h3>John Smith</h3>
              <p className="professional-category">Plumber</p>
              <div className="professional-rating">
                <span className="star-icon">★</span>
                <span>4.8 (120+ reviews)</span>
              </div>
              <div className="professional-availability">Available Now</div>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
          
          <div className="professional-card">
            <div className="professional-image">
              <img src="/api/placeholder/80/80" alt="Mike Johnson" />
            </div>
            <div className="professional-info">
              <h3>Mike Johnson</h3>
              <p className="professional-category">Electrician</p>
              <div className="professional-rating">
                <span className="star-icon">★</span>
                <span>4.9 (85+ reviews)</span>
              </div>
              <div className="professional-availability available-today">Available Today</div>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
          
          <div className="professional-card">
            <div className="professional-image">
              <img src="/api/placeholder/80/80" alt="David Brown" />
            </div>
            <div className="professional-info">
              <h3>David Brown</h3>
              <p className="professional-category">Carpenter</p>
              <div className="professional-rating">
                <span className="star-icon">★</span>
                <span>4.7 (95+ reviews)</span>
              </div>
              <div className="professional-availability available-tomorrow">Available Tomorrow</div>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Search Service</h3>
            <p>Choose from our wide range of professional services</p>
          </div>
          
          <div className="step">
            <div className="step-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Book Appointment</h3>
            <p>Select your preferred time and book instantly</p>
          </div>
          
          <div className="step">
            <div className="step-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Get Service</h3>
            <p>Verified professional arrives at your doorstep</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;