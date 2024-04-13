import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <p className="footer-text">Follow us on social media:</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#" className="footer-link"><FontAwesomeIcon icon={faFacebookF} /></a></li>
          <li className="list-inline-item"><a href="#" className="footer-link"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li className="list-inline-item"><a href="#" className="footer-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li className="list-inline-item"><a href="#" className="footer-link"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        </ul>
        <p className="footer-text">&copy; 2024 Workwanders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;