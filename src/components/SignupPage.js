
import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

function SignupPage() {
  return (
    <div className="signup-page">
      <header>
        <nav>
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default SignupPage;
