import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaGlobe, FaMobile, FaPlay } from 'react-icons/fa';
import './Portfolio.css';
import { projects } from '../portfolio';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('websites');

  // Sample app projects (you can replace these with real ones)
  const appProjects = [
    {
      id: 'Vhingo',
      title: 'Vhingo',
      image: '/1.png',
      description: 'Vhingo – India’s premier cab and logistics service. With a tech-driven fleet, we ensure safe, reliable, and comfortable rides for both travel and transport needs.',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      liveUrl: 'https://play.google.com/store/apps/details?id=com.vvhingo.vhingo'
    },
    {
      id: 'DeliverIt',
      title: 'DeliverIt',
      image: '/2.png',
      description: 'DeliverIt offers 500+ products across categories — from groceries, dairy, and beverages to ready-to-cook meals, ready-to-serve options, and kitchen essentials.',
      technologies: ['Flutter', 'Firebase', 'Stripe'],
      liveUrl: 'https://play.google.com/store/apps/details?id=app.deliverIt&hl=en_IN'
    },
    {
      id: 'LingoAI',
      title: 'LingoAI',
      image: '/3.png',
      description: 'An AI-powered app that personalizes language learning with interactive lessons, voice practice, and instant feedback—making it engaging, flexible, and effective.',
      technologies: ['React Native', 'PostgreSQL'],
      liveUrl: 'https://play.google.com/store/apps/details?id=com.weightpal.app&hl=en_IN',
    }
  ];

  const tabs = [
    {
      id: 'websites',
      label: 'Websites',
      icon: <FaGlobe />,
      description: 'Professional websites that drive results and enhance online presence',
      projects: projects
    },
    {
      id: 'apps',
      label: 'Mobile Apps',
      icon: <FaMobile />,
      description: 'Innovative mobile apps that deliver exceptional user experiences',
      projects: appProjects
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>

        {/* Horizontal Tabs */}
        <div className="portfolio-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="tab-icon">{tab.icon}</div>
              <div className="tab-content">
                <span className="tab-label">{tab.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="portfolio-content-area">
          {activeTab === 'websites' ? (
            // Websites Grid Layout
            <div className="portfolio-grid">
              {activeTabData.projects.map(project => (
                <div key={project.id} className="portfolio-card card animate-fadeInUp">
                  <div className="portfolio-image">
                    <img src={project.image} alt={project.title} />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a href={project.liveUrl} className="portfolio-link" title="View Live" target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="portfolio-content">
                    <h3 className="portfolio-title">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Mobile Apps Phone Layout
            <div className="mobile-apps-showcase">
              <div className="phones-container">
                {activeTabData.projects.map((project, index) => (
                  <div key={project.id} className="phone-frame">
                    <div className="phone-screen">
                      <img src={project.image} alt={project.title} />
                      <div className="phone-overlay">
                        <div className="phone-actions">
                          <a href={project.liveUrl} className="phone-link playstore" title="View on Play Store" target="_blank" rel="noopener noreferrer">
                            <FaPlay />
                          </a>
                          {project.githubUrl && (
                            <a href={project.githubUrl} className="phone-link github" title="View Code" target="_blank" rel="noopener noreferrer">
                              <FaGithub />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="phone-info">
                      <h3 className="phone-title">{project.title}</h3>
                      <p className="phone-description">{project.description}</p>
                      <div className="phone-technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 