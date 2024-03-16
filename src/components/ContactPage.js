
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/ContactPage.css'; 

function ContactPage({ setShowMainHeader }) {


  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        Feel free to contact us if you have any questions or inquiries. We are always happy to hear from you!
      </p>
      <div className="contact-details">
        <p>Email: contact@workwanders.com</p>
        <p>Phone: +639000000</p>
        <p>Address: 123 Malolos City , Guinhawa, Bulacan</p>
      </div>
      <div className="back-home">
        <Link to="/home">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ContactPage;