import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/ContactPage.css'; 

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending an email or making an API call
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info-form-wrapper">
        <div className="contact-info">
          <p>
            Feel free to contact us if you have any questions or inquiries. 
            We are always happy to hear from you!
          </p>
          <div className="contact-details">
            <p>Email: contact@workwanders.com</p>
            <p>Phone: +639000000</p>
            <p>Address: 123 Malolos City, Guinhawa, Bulacan</p>
          </div>
          <div className="back-home">
            <Link to="/home">
              <button>Back to Home</button>
            </Link>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="message">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
