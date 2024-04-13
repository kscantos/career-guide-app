import React, { useState, useEffect } from 'react';
import studying1 from '../img/studying.jpg';
import studying2 from '../img/studying3.jpg';
import studying3 from '../img/studying4.jpg';
import './CoursesPage.css';

const CoursesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [studying1, studying2, studying3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setActiveIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="container my-specific-container">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img src={image} className="d-block w-100 img-fluid" alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={prevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={nextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
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
};

export default CoursesPage;
