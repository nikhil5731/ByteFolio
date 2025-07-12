import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Jessica Martinez',
      role: 'CEO, TechStart Inc.',
      image: 'https://via.placeholder.com/80x80/18cb96/ffffff?text=JM',
      rating: 5,
      text: 'ByteFolio exceeded our expectations in every way. Their team delivered a stunning website that perfectly captures our brand identity. The attention to detail and professional approach made the entire process seamless.'
    },
    {
      id: 2,
      name: 'David Thompson',
      role: 'Founder, E-commerce Plus',
      image: 'https://via.placeholder.com/80x80/18cb96/ffffff?text=DT',
      rating: 5,
      text: 'Working with ByteFolio was a game-changer for our business. They built us a robust e-commerce platform that increased our sales by 300% in just six months. Highly recommend their services!'
    },
    {
      id: 3,
      name: 'Sarah Wilson',
      role: 'Marketing Director, Creative Agency',
      image: 'https://via.placeholder.com/80x80/18cb96/ffffff?text=SW',
      rating: 5,
      text: 'The mobile app ByteFolio developed for us has been incredibly successful. Their expertise in user experience design shows in every interaction. Our customers love the intuitive interface and smooth performance.'
    },
    {
      id: 4,
      name: 'Michael Chen',
      role: 'CTO, FinTech Solutions',
      image: 'https://via.placeholder.com/80x80/18cb96/ffffff?text=MC',
      rating: 5,
      text: 'ByteFolio\'s technical expertise is outstanding. They helped us build a complex financial dashboard that handles millions of transactions daily. Their code quality and security practices are top-notch.'
    },
    {
      id: 5,
      name: 'Emily Rodriguez',
      role: 'Owner, Local Restaurant Chain',
      image: 'https://via.placeholder.com/80x80/18cb96/ffffff?text=ER',
      rating: 5,
      text: 'From concept to launch, ByteFolio was with us every step of the way. They created a beautiful website and ordering system that helped us during the pandemic. Their ongoing support has been invaluable.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear what our satisfied clients have to say about working with ByteFolio
        </p>

        <div className="testimonials-slider">
          <div className="testimonials-container">
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="quote-icon">
                      <FaQuoteLeft />
                    </div>
                    
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="star" />
                      ))}
                    </div>
                    
                    <p className="testimonial-text">{testimonial.text}</p>
                    
                    <div className="testimonial-author">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="author-image"
                      />
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-role">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-controls">
            <button 
              className="control-btn prev-btn"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="control-btn next-btn"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 