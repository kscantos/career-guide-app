
import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

function SignupPage() {
  return (
    <div className="signup-page">
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
