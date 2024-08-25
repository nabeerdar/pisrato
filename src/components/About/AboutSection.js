// import React from 'react';


// function AboutSection() {
//   return (
//     <section className="about-section">
//        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}> We're  <strong className="purple">Proud </strong>
//         of Our Work </h1>
     
//       <div className="stats-container">
//         <div className="stat-box">
//           <p className="stat-number">2023</p>
//           <p className="stat-label">Established Since</p>
//         </div>
//         <div className="stat-box">
//           <p className="stat-number">4+</p>
//           <p className="stat-label">Team Members</p>
//         </div>
//         <div className="stat-box">
//           <p className="stat-number">WorldWide</p>
//           <p className="stat-label">Countries Served</p>
//         </div>
//         <div className="stat-box">
//           <p className="stat-number">15+</p>
//           <p className="stat-label">Apps per year</p>
//         </div>
//         <div className="stat-box">
//           <p className="stat-number">50+</p>
//           <p className="stat-label">Served Clients</p>
//         </div>
      
//       </div>
//     </section>
    
//   );
// }

// export default AboutSection;


import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the effect only once when it comes into view
    threshold: 0.1, // Adjust this value if needed
  });

  return (
    <section className="about-section" ref={ref}>
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        We're <strong className="purple">Proud </strong>of Our Work
      </h1>

      <div className="stats-container">
        <div className="stat-box">
          <p className="stat-number">
            {inView ? <CountUp end={2023} duration={2} /> : '2023'}
          </p>
          <p className="stat-label">Established Since</p>
        </div>
        <div className="stat-box">
          <p className="stat-number">
            {inView ? <CountUp end={4} duration={2} suffix="+" /> : '4+'}
          </p>
          <p className="stat-label">Team Members</p>
        </div>
        <div className="stat-box">
          <p className="stat-number">
            {inView ? <CountUp end={100} duration={2} suffix="+" /> : 'WorldWide'}
          </p>
          <p className="stat-label">Countries Served</p>
        </div>
        <div className="stat-box">
          <p className="stat-number">
            {inView ? <CountUp end={15} duration={2} suffix="+" /> : '15+'}
          </p>
          <p className="stat-label">Apps per year</p>
        </div>
        <div className="stat-box">
          <p className="stat-number">
            {inView ? <CountUp end={50} duration={2} suffix="+" /> : '50+'}
          </p>
          <p className="stat-label">Served Clients</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

