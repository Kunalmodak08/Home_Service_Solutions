import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    // Handle login logic here
  };

  return (
    <div className="auth-page">
      <Header />
      
      <div className="auth-container">
        <div className="auth-form-container">
          <h2 className="auth-title">Log in to your account</h2>
          
          <form onSubmit={handleSubmit} className="auth-form">
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </div>
            
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
            
            <button type="submit" className="form-button">Log In</button>
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
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;