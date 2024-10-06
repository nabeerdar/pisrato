// import React from 'react';
// import './SoftwareDev.css';
// import illustrator1 from '../../Assets/illustrator1.svg';
// import illustrator2 from '../../Assets/illustrator2.svg';
// import illustrator3 from '../../Assets/illustrator3.svg';
// import illustrator4 from '../../Assets/illustrator4.svg';
// import illustrator5 from '../../Assets/illustrator5.svg';
// import illustrator6 from '../../Assets/illustrator6.svg';


// const SoftwareDev = () => {
//   const boxes = [
//     {
//       title: 'Requirement Analysis',
//       image: illustrator1,
//       description: 'We start by discussing and analyzing our clients requirements, drafting the initial software outline, identifying any gaps, and proposing solutions throughout the process.',
//     },
//     {
//       title: 'UI & UX Designing',
//       image: illustrator2,
//       description: 'Our in-house creative UI/UX team designs intuitive interfaces for your software applications, always keeping the end-users in mind.',
//     },
//     {
//       title: 'Development Phase',
//       image: illustrator3,
//       description: 'We guide your idea through our streamlined software development process, customizing the product to meet your technical and design specifications.',
//     },
//     {
//       title: 'Quality Assurance & Testing',
//       image: illustrator4,
//       description: 'We uphold rigorous quality standards to ensure that your software meets your specifications and operates without any bugs.',
//     },
//     {
//       title: 'Launching & Marketing',
//       image: illustrator5,
//       description: 'Our team works to enhance the success of your product launch by analyzing, evaluating, and refining it throughout its life cycle. We implement targeted marketing strategies to drive productivity and progress.',
//     },
//     {
//       title: 'Active Support & Assistance',
//       image: illustrator6,
//       description: 'Our team excels in planning the rollout of complex software systems and providing ongoing technical support to ensure they remain operational.',
//     },
//   ];

//   return (
//     <section className='container'>
//     <div className="software-dev-container">
//       {boxes.map((box, index) => (
//         <div key={index} className="software-dev-box">
//           <div className="front">
//             <img className="box-image" src={box.image} alt={box.title} />
//           </div>
//           <div className="back">
//             <>{box.title}</>
//             <p>{box.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     </section>
//   );
// };

// export default SoftwareDev;


import React from 'react';
import './SoftwareDev.css';
import illustrator1 from '../../Assets/Illustrator1.png';
import illustrator2 from '../../Assets/Illustrator2.png';
import illustrator3 from '../../Assets/Illustrator3.png';
import illustrator4 from '../../Assets/Illustrator4.png';
import illustrator5 from '../../Assets/Illustrator5.png';
import illustrator6 from '../../Assets/Illustrator6.png';
import illustrator7 from '../../Assets/Illustrator7.png';
import illustrator8 from '../../Assets/Illustrator8.png';
const SoftwareDev = () => {
  const boxes = [
    {
      title: 'Requirement Analysis',
      image: illustrator7,
      description: 'We start by discussing and analyzing our clients requirements, drafting the initial software outline, identifying any gaps, and proposing solutions throughout the process.',
      color: '#f8c3c3',
    },
    {
      title: 'UI & UX Designing',
      image: illustrator5,
      description: 'Our in-house creative UI/UX team designs intuitive interfaces for your software applications, always keeping the end-users in mind.',
      color: '#ffd6a5',
    },
    {
      title: 'Development Phase',
      image: illustrator2,
      description: 'We guide your idea through our streamlined software development process, customizing the product to meet your technical and design specifications.',
      color: '#fdffb6',
    },
    {
      title: 'Quality Assurance & Testing',
      image: illustrator4,
      description: 'We uphold rigorous quality standards to ensure that your software meets your specifications and operates without any bugs.',
      color: '#caffbf',
    },
    {
      title: 'Launching & Marketing',
      image: illustrator8,
      description: 'Our team works to enhance the success of your product launch by analyzing, evaluating, and refining it throughout its life cycle. We implement targeted marketing strategies to drive productivity and progress.',
      color: '#9bf6ff',
    },
    {
      title: 'Active Support & Assistance',
      image: illustrator6,
      description: 'Our team excels in planning the rollout of complex software systems and providing ongoing technical support to ensure they remain operational.',
      color: '#a0c4ff',
    },
  ];

  return (
    <section className='container'>
      <h1 className='Softwareheading'><b>Software Development Process</b></h1>
      <div className="software-dev-container">
        {boxes.map((box, index) => (
          <div key={index} className={`software-dev-box box-${index + 1}`}>
            <div className="front" style={{ backgroundColor: box.color }}>
              <div className="title">{box.title}</div>
              <div className="box-number">{`0${index + 1}`}</div>
              <img className="box-image" src={box.image} alt={box.title} />
            </div>
            <div className="back">
              <h3>{box.title}</h3>
              <p>{box.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftwareDev;
