import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function Home() {
  return (
    <div>
   <div className="home-content">
          <h2>Welcome to Workwanders!</h2>
          <div>
            <p className="p1">With WorkWanders, you can assess your strengths, explore new skills, 
              connect with professionals in your field, and discover exciting career 
              opportunities tailored to your ambitions.</p>
            <p className="p2">Embark on your career journey today with WorkWanders!</p>
          </div>
          <div className="buttons-container mt-3">
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          </div>
        </div>

    </div>
  );
}

export default Home;
