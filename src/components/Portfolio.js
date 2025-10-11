import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Portfolio.css';
import { projects } from '../portfolio';

const Portfolio = () => {

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>

        {/* Content Area */}
        <div className="portfolio-content-area">
          <div className="portfolio-grid">
              {projects.map((project, index) => (
                <div key={index} className="portfolio-card card animate-fadeInUp">
                  <div className="portfolio-image">
                    <img src={project.image || 'https://via.placeholder.com/400x300?text=Project'} alt={project.title} />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        {project.liveUrl && (
                          <a href={project.liveUrl} className="portfolio-link github-link" title="View Live" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt />
                            <span className="link-text">View Live</span>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} className="portfolio-link github-link" title="View Code" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                            <span className="link-text">View Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="portfolio-content">
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-description">{project.description}</p>
                    {project.technologies && (
                      <div className="portfolio-technologies">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 