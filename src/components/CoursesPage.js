import React from 'react';
import './CoursesPage.css';

function CoursesPage() {
  return (
    <div className="container">
      <div className="course">
        <h2>CV/Resume Help</h2>
        <p>Get assistance with your CV/Resume</p>
        <button className="options-button">See Options</button>
      </div>
      <div className="course">
        <h2>Career Testing</h2>
        <p>Start a career test to discover your strengths</p>
        <button className="test-button">Start the Test</button>
      </div>
      <div className="course">
        <h2>Courses Search</h2>
        <p>Explore our catalog of courses</p>
        <button className="browse-button">Browse Courses</button>
      </div>
      <div className="course">
        <h2>Career Advice</h2>
        <p>Join our forum for career advice</p>
        <button className="forum-button">Go to Forum</button>
      </div>
    </div>
  );
}

export default CoursesPage;