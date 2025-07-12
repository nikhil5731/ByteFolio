import React from 'react';
import { FaArrowRight, FaPlay, FaCode, FaDesktop, FaMobile } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-fadeInUp">
              We Create <span className="highlight">Digital Excellence</span> That Drives Results
            </h1>
            <p className="hero-subtitle animate-fadeInUp">
              Transform your business with cutting-edge web development, stunning design, 
              and powerful digital solutions that captivate your audience and boost your growth.
            </p>
            <div className="hero-buttons animate-fadeInUp">
              <a href="#contact" className="btn btn-primary">
                Get Started <FaArrowRight className="btn-icon" />
              </a>
              <a href="#portfolio" className="btn btn-outline">
                <FaPlay className="btn-icon" /> View Our Work
              </a>
            </div>
            <div className="hero-stats animate-fadeInUp">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">99%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-container animate-fadeInRight">
              <div className="floating-cards">
                <div className="floating-card card-1 animate-float">
                  <FaDesktop className="card-icon" />
                  <span>Web Development</span>
                </div>
                <div className="floating-card card-2 animate-float">
                  <FaMobile className="card-icon" />
                  <span>Mobile Apps</span>
                </div>
                <div className="floating-card card-3 animate-float">
                  <FaCode className="card-icon" />
                  <span>Custom Solutions</span>
                </div>
              </div>
              <div className="central-element">
                <div className="code-lines">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 