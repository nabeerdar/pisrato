// import ProjectCards from "./components/Projects/ProjectCards";
// import Projects from "./components/Projects/Projects";
// import SoftwareDev from "./components/Projects/SoftwareDev";



// export default function ProjectSection(){
//     return (
//         <>
            
//             <Projects />
            
//             <SoftwareDev />
//         </>
//     )
// }
import React from 'react';
import ProjectCards from './components/Projects/ProjectCards';
import Projects from './components/Projects/Projects';
import SoftwareDev from './components/Projects/SoftwareDev';
import NewProjectSection from './components/Projects/NewProjectSection';
import './components/Projects/ProjectCards.css';

// Import project images
import chatify from './Assets/Projects/chatify.png';
import bitsOfCode from './Assets/Projects/blog.png';
import editor from './Assets/Projects/codeEditor.png';
import emotion from './Assets/Projects/emotion.png';

// Project data
const projects = [
  {
    imgPath: chatify,
    isBlog: false,
    title: 'Sorla',
    description:
      'Designed a dynamic, responsive website for SORLA using React. The site emphasizes sustainability in residential and industrial sectors, showcasing eco-friendly practices while effectively communicating SORLA\'s mission and expertise.',
    ghLink: 'https://github.com/yourrepo/sorla',
  },
  {
    imgPath: bitsOfCode,
    isBlog: false,
    title: 'Golnaz',
    description:
      'Created a responsive personal website for Golnaz using React, HTML, CSS, and JavaScript. The site includes sections for her portfolio, blog, and contact information, effectively showcasing her work and insights.',
    ghLink: 'https://github.com/yourrepo/golnaz',
  },
  {
    imgPath: editor,
    isBlog: false,
    title: 'Fitness',
    description:
      'Developed a responsive fitness website using React, HTML, CSS, and JavaScript. The site features sections for workout programs, nutrition advice, and motivational content, guiding users toward achieving their fitness goals effectively.',
    ghLink: 'https://github.com/yourrepo/fitness',
  },
  {
    imgPath: emotion,
    isBlog: false,
    title: 'Inventum-Digital',
    description:
      'Showcased our work on the Inventum website with a modern, responsive design using HTML, CSS, and JavaScript. The main page features a clean layout with a prominent header introducing the agency.',
    ghLink: 'https://github.com/yourrepo/inventum-digital',
  },
];

function App() {
  return (
    <div>
      <NewProjectSection projects={projects} />
      <SoftwareDev />
    </div>
  );
}

export default App;
