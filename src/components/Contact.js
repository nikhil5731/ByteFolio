import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '+91 93114-50234',
      link: 'tel:+91 93114-50234'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '+91 98182-22557',
      link: 'tel:+91 98182-22557'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'bytefolio.tech@gmail.com',
      link: 'mailto:bytefolio.tech@gmail.com'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to start your next project? Let's discuss how we can help bring your vision to life
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-title">Let's Talk</h3>
            <p className="contact-description">
              We'd love to hear from you. Whether you have a question about our services, 
              pricing, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4 className="contact-label">{info.title}</h4>
                    <a href={info.link} className="contact-link">
                      {info.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message <FaPaperPlane className="btn-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 