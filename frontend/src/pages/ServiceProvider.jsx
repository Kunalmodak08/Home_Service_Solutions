import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServiceProvider = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Plumbing', 'Electrical', 'Carpentry', 'Painting'];
  
  const providers = [
    {
      id: 1,
      name: 'John Smith',
      category: 'Plumber',
      rating: 4.8,
      reviews: 120,
      availability: 'Available Now'
    },
    {
      id: 2,
      name: 'Mike Johnson',
      category: 'Electrician',
      rating: 4.9,
      reviews: 85,
      availability: 'Available Today'
    },
    {
      id: 3,
      name: 'David Brown',
      category: 'Carpenter',
      rating: 4.7,
      reviews: 95,
      availability: 'Available Tomorrow'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      category: 'Painter',
      rating: 4.9,
      reviews: 75,
      availability: 'Available Now'
    }
  ];

  return (
    <div className="service-provider-page">
      <Header />
      
      <div className="page-container">
        <div className="provider-header">
          <h1 className="provider-title">Service Providers</h1>
          <button className="filter-button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Filter
          </button>
        </div>
        
        <div className="filter-container">
          {filters.map(filter => (
            <div 
              key={filter}
              className={`filter-chip ${filter === activeFilter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </div>
          ))}
        </div>
        
        <div className="providers-grid">
          {providers.map(provider => (
            <div key={provider.id} className="provider-card">
              <div className="provider-image">
                <img src="/api/placeholder/120/120" alt={provider.name} />
              </div>
              <div className="provider-info">
                <h3 className="provider-name">{provider.name}</h3>
                <p className="provider-category">{provider.category}</p>
                <div className="provider-rating">
                  <span className="star-icon">★</span>
                  <span>{provider.rating} ({provider.reviews}+ reviews)</span>
                </div>
                <div className={`provider-availability ${provider.availability.replace(' ', '-').toLowerCase()}`}>
                  {provider.availability}
                </div>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceProvider;