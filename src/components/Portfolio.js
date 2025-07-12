import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';
import { projects } from '../portfolio';

const Portfolio = () => {

  // const projects = [
  //   {
  //     id: 1,
  //     title: 'E-commerce Platform',
  //     image: 'https://via.placeholder.com/400x300/18cb96/ffffff?text=E-commerce+Platform',
  //     liveUrl: '#',
  //     githubUrl: '#'
  //   },
  //   {
  //     id: 2,
  //     title: 'Mobile Banking App',
  //     image: 'https://via.placeholder.com/400x300/18cb96/ffffff?text=Banking+App',
  //     liveUrl: '#',
  //     githubUrl: '#'
  //   },
  //   {
  //     id: 3,
  //     title: 'SaaS Dashboard',
  //     image: 'https://via.placeholder.com/400x300/18cb96/ffffff?text=SaaS+Dashboard',
  //     liveUrl: '#',
  //     githubUrl: '#'
  //   },
  //   {
  //     id: 4,
  //     title: 'Learning Management System',
  //     image: 'https://via.placeholder.com/400x300/18cb96/ffffff?text=LMS+Platform',
  //     liveUrl: '#',
  //     githubUrl: '#'
  //   },
  //   {
  //     id: 5,
  //     title: 'Fitness Tracking App',
  //     image: 'https://via.placeholder.com/400x300/18cb96/ffffff?text=Fitness+App',
  //     liveUrl: '#',
  //     githubUrl: '#'
  //   },
  //   {
  //     id: 6,
  //     title: 'Real Estate Platform',
  //     image: 'https://via.placeholder.com/400x300/18cb96/ffffff?text=Real+Estate',
  //     liveUrl: '#',
  //     githubUrl: '#'
  //   }
  // ];
  
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Explore our recent projects and see how we've helped businesses achieve their digital goals
        </p>

        <div className="portfolio-grid">
          {projects.map(project => (
            <div key={project.id} className="portfolio-card card animate-fadeInUp">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-actions">
                    <a href={project.liveUrl} className="portfolio-link" title="View Live">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="portfolio-title">{project.title}</h3>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 