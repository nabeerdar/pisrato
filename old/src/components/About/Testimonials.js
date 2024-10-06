
import React from 'react';
import './Testimonial.css';

// Importing images
import Saad from '../../Assets/Testimonials/saad.png';
import Mirana from '../../Assets/Testimonials/Mirana.jpg';
import Fawaz from '../../Assets/Testimonials/Fawaz.jpeg';
import Zara from '../../Assets/Testimonials/Zara.jpeg';
import Sarim from '../../Assets/Testimonials/Sarim.jpg';

const reviews = [
  {
    name: 'Saad',
    date: 'July 4, 2024',
    rating: 5,
    message:
      'Nabeer has been exceptional throughout my final semester. His methodical approach to handling tasks and delivering high-quality work significantly boosted my confidence and understanding of complex topics. If anyone is looking for someone who excels at managing and completing tasks effectively, I highly recommend Nabeer.',
    image: Saad,
  },
  {
    name: 'Mirana',
    date: 'July 3, 2024',
    rating: 5,
    message:
      'Nabeers expertise significantly enhanced the functionality and aesthetics of the Sorla website. His meticulous attention to detail and collaborative approach ensured a seamless and polished final product, showcasing his dedication and proficiency in web development.',
    image: Mirana,
  },
  {
    name: 'Fawaz',
    date: 'July 3, 2024',
    rating: 5,
    message:
      'We covered two Machine Learning topics: Decision Trees and Logistic Regression. We evaluated the classifiers using accuracy scores and confusion matrices, and fine-tuned the classifiers up to a maximum depth of 5 using our spam filter data.',
    image: Fawaz,
  },
  {
    name: 'Zara',
    date: 'July 2, 2024',
    rating: 5,
    message:
      'Nabeer’s expertise in JavaScript exceeded my expectations. We covered everything from basics to advanced topics like async programming and React. His engaging approach made complex subjects accessible and manageable. I highly recommend Nabeer for anyone looking to enhance their JavaScript skills. Thank you, Nabeer.',
    image: Zara,
  },
  {
    name: 'Sarim',
    date: 'July 1, 2024',
    rating: 5,
    message:
      'Nabeer is a talented web developer specializing in HTML, CSS, and JavaScript. He excels in creating visually stunning and responsive web designs with a meticulous eye for detail. Nabeer skillfully translates creative concepts into elegant, efficient code, enhancing both the aesthetics and functionality of web applications.',
    image: Sarim,
  },
];

// Calculate total reviews dynamically
const totalReviews = reviews.length;

// Count ratings
const ratingCounts = reviews.reduce((acc, { rating }) => {
  acc[rating] = (acc[rating] || 0) + 1;
  return acc;
}, {});

// Determine the most frequent rating
const highestRating = Object.keys(ratingCounts).reduce((a, b) =>
  ratingCounts[a] > ratingCounts[b] ? a : b
);

const calculateLineFill = (count) => {
  return Math.min((count / totalReviews) * 100, 100);
};

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h2 className="testimonial-heading">What <b>Clients</b> Say</h2>
      <div className="review-summary">
        <div className="rating">
          <div className="rating-score">{highestRating}</div>
          <div className="stars">{'★'.repeat(highestRating)}</div>
          <div className="total-reviews">{totalReviews} reviews</div>
        </div>
        <div className="rating-lines">
          {[5, 4, 3, 2, 1].map((score) => (
            <div className="line-item" key={score}>
              <span className="line-number">{score}</span>
              <div className="line-bar">
                <div
                  className="line-fill"
                  style={{
                    width: `${calculateLineFill(ratingCounts[score] || 0)}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <div className="review-header">
              <img src={review.image} alt={review.name} className="review-image" />
              <div className="review-details">
                <h3 className="review-name">{review.name}</h3>
                <p className="review-date">{review.date}</p>
                <div className="stars">{'★'.repeat(review.rating)}</div>
              </div>
            </div>
            <p className="review-message">{review.message}</p>
            <hr className="review-divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

