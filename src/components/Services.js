import React from 'react';
import { FaCode, FaMobile, FaDesktop, FaSearch, FaShoppingCart, FaRocket } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaDesktop />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies like React, Node.js, and modern frameworks.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Cross-Browser Compatible']
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Development']
    },
    {
      icon: <FaCode />,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to meet your specific business needs and workflow requirements.',
      features: ['Business Logic', 'Database Design', 'API Integration', 'Cloud Solutions']
    },
    {
      icon: <FaSearch />,
      title: 'SEO & Analytics',
      description: 'Comprehensive SEO strategies and analytics implementation to boost your online visibility and track performance.',
      features: ['SEO Audit', 'Keyword Research', 'Analytics Setup', 'Performance Monitoring']
    },
    {
      icon: <FaShoppingCart />,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with secure payment processing, inventory management, and customer analytics.',
      features: ['Online Stores', 'Payment Integration', 'Inventory Management', 'Customer Analytics']
    },
    {
      icon: <FaRocket />,
      title: 'Performance Optimization',
      description: 'Speed up your website and improve user experience with advanced optimization techniques and best practices.',
      features: ['Speed Optimization', 'Code Minification', 'Image Optimization', 'Caching Strategies']
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer comprehensive digital solutions to help your business thrive in the digital landscape
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card animate-fadeInUp">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature">
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 