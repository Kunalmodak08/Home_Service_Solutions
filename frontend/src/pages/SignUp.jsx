import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up attempt with:', { name, email, password });
    // Handle signup logic here
  };

  return (
    <div className="auth-page">
      <Header />
      
      <div className="auth-container">
        <div className="auth-form-container">
          <h2 className="auth-title">Create an account</h2>
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name"
                className="form-input" 
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                className="form-input" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password"
                className="form-input" 
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </div>
            
            <button type="submit" className="form-button">Sign Up</button>
          </form>
          
          <div className="auth-divider">
            <div className="divider-line"></div>
            <span className="divider-text">OR</span>
            <div className="divider-line"></div>
          </div>
          
          <button className="social-login-button">
            <span className="social-icon">G</span>
            Continue with Google
          </button>
          
          <div className="auth-redirect">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;