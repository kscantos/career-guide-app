import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import studying1 from "../img/career.jpg";
import studying2 from "../img/career2.jpg";
import studying3 from "../img/career1.jpg";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [studying1, studying2, studying3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="home-content text-left" style={{ marginLeft: "1%" }}>
          <p style={{ fontSize: "40px", fontWeight: "bold" }}>Where your Future Begins!</p>
          <p className="p1">
            With WorkWanders, you can assess your strengths, explore new
            skills, connect with professionals in your field, and discover
            exciting career opportunities tailored to your ambitions.
          </p>
          <p className="p2">
            Embark on your career journey today with WorkWanders!
          </p>
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
      <div className="col-md-6 d-flex justify-content-end align-items-center">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ width: "600px", height: "300px" }}
        >
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              >
                <img
                  src={image}
                  className="d-block w-100 img-fluid"
                  alt={`Slide ${index}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={prevSlide}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={nextSlide}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;
