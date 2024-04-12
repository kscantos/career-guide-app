import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logoWW1.png';
import '../components/AboutusPage.css'; 

function About({ setShowMainHeader }) {

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-info">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed commodo urna vel nisi tristique, vel suscipit purus fermentum. 
            Mauris id mi eget libero vulputate scelerisque. 
            Vivamus vitae nunc sit amet orci lacinia feugiat. 
            Ut ultricies commodo ex, nec tincidunt justo ullamcorper nec. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            Aenean id ligula lorem. Aliquam nec tincidunt velit, eget luctus justo. 
            Cras condimentum pharetra turpis vel vehicula. Sed bibendum ipsum vel lacinia rhoncus. 
            Nam tincidunt gravida turpis, ut euismod neque facilisis nec.
          </p>
          <p>
            Fusce suscipit ultrices magna, id sollicitudin mi iaculis ac. N
            unc nec feugiat justo. Donec dapibus fringilla ante, at dignissim ex congue sit amet. 
            Aliquam aliquet dolor vel malesuada lobortis. Nulla facilisi. In hac habitasse platea dictumst. 
            Nulla efficitur interdum neque ac dictum. Vivamus nec nisi quam. 
            Nulla nec tortor vel tortor consequat consequat sit amet eu odio.
          </p>
        </div>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="about-logo" />
        </div>
      </div>
      <div className="contact-button">
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
