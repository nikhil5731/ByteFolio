import React from 'react';
import { FaUsers, FaAward, FaCode, FaHandshake, FaLightbulb, FaRocket, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { number: '7+', label: 'Years Experience', icon: <FaAward /> },
    { number: '500+', label: 'Projects Completed', icon: <FaCode /> },
    { number: '100+', label: 'Happy Clients', icon: <FaUsers /> },
    { number: '50+', label: 'Awards Won', icon: <FaAward /> }
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to deliver exceptional results.'
    },
    {
      icon: <FaHandshake />,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their needs and exceed their expectations.'
    },
    {
      icon: <FaRocket />,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring high-quality deliverables and outstanding performance.'
    }
  ];

  const teamMembers = [

    {
      name: 'Rishabh Jain',
      role: 'Lead Developer',
      image: '/rishabh.png',
      linkedin: 'https://www.linkedin.com/in/rishabh-jain2601/',
      github: 'https://github.com/rishabhjain2601',
      instagram: 'https://www.instagram.com/rishabhjain_11/'
    },
    {
      name: 'Nikhil Kumar',
      role: 'UI/UX Designer and Developer',
      image: '/nikhil.jpeg',
      linkedin: 'https://www.linkedin.com/in/nikhilkumar04/',
      github: 'https://github.com/nikhil5731',
      instagram: 'https://www.instagram.com/niikhiil48/'
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About ByteFolio</h2>
        <p className="section-subtitle">
          We're a passionate team of developers and designers dedicated to creating exceptional digital experiences
        </p>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-heading">Our Story</h3>
            <p className="about-description">
              Founded in 2017, ByteFolio has been at the forefront of digital innovation, 
              helping businesses of all sizes achieve their online goals. We specialize in 
              creating custom web applications, mobile apps, and digital solutions that 
              drive growth and success.
            </p>
            <p className="about-description">
              Our team combines technical expertise with creative vision to deliver 
              solutions that not only meet but exceed our clients' expectations. 
              We believe in building long-term partnerships based on trust, transparency, 
              and outstanding results.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card animate-fadeInUp">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-values">
          <h3 className="values-title">Our Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card card animate-fadeInUp">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-team">
          <h3 className="team-title">Meet Our Team</h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card card animate-fadeInUp">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                  <p className="team-social">
                    <a href={member.linkedin} target="_blank" rel='noopener noreferrer'>
                      <FaLinkedin size={25} color='#18cb96'/>
                    </a>
                    <a href={member.github} target="_blank" rel='noopener noreferrer'>
                      <FaGithub size={25} color='#18cb96'/>
                    </a>
                    <a href={member.instagram} target="_blank" rel='noopener noreferrer'>
                      <FaInstagram size={25} color='#18cb96'/>
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 