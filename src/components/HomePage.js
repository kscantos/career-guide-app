import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function Home({ setShowMainHeader }) {
  setShowMainHeader(true); 

  return (
    <div>
      <header className="App-header">

      </header>
      <div className="content">

        <h2>Welcome to Workwanders!</h2>
        <p className="p1"> With WorkWanders, you can assess your strengths, explore new skills, 
        connect with professionals in your field, and discover exciting career 
        opportunities tailored to your ambitions. </p>
        <p className="p2">  Embark on your career journey today with WorkWanders!</p>


        <div className="buttons-container">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup-button">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
