// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import "./ProjectCards.css";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";


// function Projects() {
//   return (
//     <Container fluid className="project-sections">
//       <Particle />
//       <Container>
//         <h1 className="project-headings">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "" }}>
//           Here are a few projects We've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-cards">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="Sorla"
//               description="I designed a dynamic, responsive website for SORLA using React. The site emphasizes SORLA's commitment to sustainability in residential and industrial sectors. It showcases eco-friendly practices while effectively communicating SORLA's mission and expertise. This project highlights my skills in creating visually appealing, functional websites that align with SORLA's values and goals."
//               ghLink=""
            
//             />
//           </Col>

//           <Col md={4} className="project-cards">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Golnaz"
//               description="Created a responsive personal website for Golnaz using React, HTML, CSS, and JavaScript. The site features a modern design with sections for her portfolio, blog, and contact information, showcasing her work and insights effectively. This project demonstrates my ability to build user-friendly, visually appealing websites optimized for showcasing personal projects and connecting with audiences."
//               ghLink=""
            
//             />
//           </Col>

//           <Col md={4} className="project-cards">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Fitness"
//               description="Developed a responsive fitness website using React, HTML, CSS, and JavaScript. The site features an intuitive layout with sections for workout programs, nutrition advice, and motivational content designed to guide users toward fitness goals. This project highlights our expertise in creating visually appealing, user-friendly interfaces optimized for both mobile and desktop devices."
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               // demoLink="https://editor.soumya-jit.tech/"              
//             />
//           </Col>
//           <Col md={4} className="project-cards">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Inventum-Digital"
//               description="This project showcases our work on the Inventum Digital website. We developed a modern, responsive design using HTML, CSS, and JavaScript. The main page features a clean layout with a prominent header introducing the agency, followed by three interactive cards. Each card provides a brief description of the service, and subtle hover effects add an engaging touch to the user experience."
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               // demoLink="https://editor.soumya-jit.tech/"              
//             />
//           </Col>
//         </Row>
       
//       </Container>
//     </Container>
//   );
// }

// export default Projects;




import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCards";
import "./ProjectCards.css";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";
import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      imgPath: chatify,
      isBlog: false,
      title: "Sorla",
      description:
        "Designed a dynamic, responsive website for SORLA using React. The site emphasizes sustainability in residential and industrial sectors, showcasing eco-friendly practices while effectively communicating SORLA's mission and expertise.",
      ghLink: "",
    },
    {
      imgPath: bitsOfCode,
      isBlog: false,
      title: "Golnaz",
      description:
        "Created a responsive personal website for Golnaz using React, HTML, CSS, and JavaScript. The site includes sections for her portfolio, blog, and contact information, effectively showcasing her work and insights.",
      ghLink: "",
    },
    {
      imgPath: editor,
      isBlog: false,
      title: "Fitness",
      description:
        "Developed a responsive fitness website using React, HTML, CSS, and JavaScript. The site features sections for workout programs, nutrition advice, and motivational content, guiding users toward achieving their fitness goals effectively.",
      ghLink: "https://github.com/soumyajit4419/Editor.io",
    },
    {
      imgPath: emotion,
      isBlog: false,
      title: "Inventum-Digital",
      description:
        "Showcased our work on the Inventum website with a modern, responsive design using HTML, CSS, and JavaScript. The main page features a clean layout with a prominent header introducing the agency.",
      ghLink: "https://github.com/soumyajit4419/Editor.io",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const getVisibleProjects = () => {
    const visibleProjects = [];
    for (let i = 0; i < 3; i++) {
      visibleProjects.push(projects[(currentIndex + i) % projects.length]);
    }
    return visibleProjects;
  };

  return (
    <div className="new-project-section">
      <h1 className="new-project-heading">
        My Recent <strong className="purple">Work</strong>
      </h1>
      <p>Here are a few projects we've worked on recently.</p>
      <div className="new-project-cards-container">
        <span className="arrow arrow-left" onClick={prevSlide}>
          &#8249;
        </span>
        {getVisibleProjects().map((project, index) => (
          <ProjectCard
            key={index}
            imgPath={project.imgPath}
            isBlog={project.isBlog}
            title={project.title}
            description={project.description}
            ghLink={project.ghLink}
          />
        ))}
        <span className="arrow arrow-right" onClick={nextSlide}>
          &#8250;
        </span>
      </div>
    </div>
  );
}

export default Projects;
