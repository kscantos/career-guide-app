import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './CoursesPage.css';
import studyingImage from '../img/logoWW1.png';


function CoursesPage() {
  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="course">
            <h2>CV/Resume Help</h2>
            <p>Get assistance with your CV/Resume</p>
            <button className="btn btn-primary">See Options</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="course">
            <h2>Career Testing</h2>
            <p>Start a career test to discover your strengths</p>
            <button className="btn btn-primary">Start the Test</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="course">
            <h2>Courses Search</h2>
            <p>Explore our catalog of courses</p>
            <button className="btn btn-primary">Browse Courses</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="course">
            <h2>Career Advice</h2>
            <p>Join our forum for career advice</p>
            <button className="btn btn-primary">Go to Forum</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;