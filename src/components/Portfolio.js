import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Portfolio.css';
import { projects } from '../portfolio';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  // Calculate pagination values
  const totalPages = Math.ceil(projects.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentProjects = projects.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to portfolio section
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>

        {/* Content Area */}
        <div className="portfolio-content-area">
          <div className="portfolio-grid">
              {currentProjects.map((project, index) => (
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="pagination-btn" 
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              <div className="pagination-numbers">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button 
                className="pagination-btn" 
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 