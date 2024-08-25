// src/components/Testimonials.js
import React from 'react';
import Jane from '../../Assets/jane.png';
import John from '../../Assets/john.png';

const testimonialsData = [
  {
    name: 'John Doe',
    image: John,
    text: 'This is a wonderful service! Highly recommended.',
  },
  {
    name: 'Jane Smith',
    image: Jane,
    text: 'A truly fantastic experience from start to finish.',
  },
  {
    name: 'Alice Johnson',
    image: John,
    text: 'Excellent customer support and great value for money.',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
