import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
// import { BiSolidPhoneCall } from "react-icons/bi";
import './Contact.css';

const googleForm = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeiXqhRqC0NucdzJa6MgADMdwmeXalbHFbJ9J8HWl36TPTG1A/formResponse"
  
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateContactForm = (values) => {
    const errors = {};
  
    // Name
    if (!values.name || values.name.trim().length < 2) {
      return "Name must be at least 2 characters.";
    }
  
    // Phone
    if (!values.phone) {
      return "Phone number is required.";
    } else if (!/^\d{10}$/.test(values.phone)) {
      return "Phone number must be 10 digits.";
    }
  
    // Email
    if (!values.email) {
      return "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      return "Invalid email address.";
    }
  
    // Subject
    if (!values.subject || values.subject.trim() === "") {
      return "Subject is required.";
    }
  
    // Message
    if (!values.message || values.message.trim().length === 0) {
      return "Message is required.";
    }
  
    return "";
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const error = validateContactForm(formData);
    if (error !== "") {
      alert(error);
      return;
    }

    // Submit to Google Form
    
    const formDataForGoogle = new FormData();
    formDataForGoogle.append('entry.945552930', formData.name);
    formDataForGoogle.append('entry.1814748967', formData.phone);
    formDataForGoogle.append('entry.1332188452', formData.email);
    formDataForGoogle.append('entry.1907371431', formData.subject);
    formDataForGoogle.append('entry.469467989', formData.message);
    
    fetch(googleForm, {
      method: "POST",
      mode: "no-cors",
      body: formDataForGoogle,
    }).then(() => {
      alert("Submitted!");
    }).catch((error) => {
      console.error('Error submitting form:', error);
    });
  
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    // {
    //   icon: <BiSolidPhoneCall size={25}/>,
    //   title: 'Phone',
    //   details: '+91 93114-50234',
    //   link: 'tel:+91 93114-50234'
    // },
    // {
    //   icon: <BiSolidPhoneCall size={25}/>,
    //   title: 'Phone',
    //   details: '+91 98182-22557',
    //   link: 'tel:+91 98182-22557'
    // },
    {
      icon: <FaEnvelope size={20}/>,
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
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
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