// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "./Home2.css";
// import TeamMemberCard from "./TeamMemberCard"; 
// import Github from "./Github";

// import Techstack from "./Techstack";
// import Particle from "../Particle";
// import Toolstack from "./Toolstack";
// import aqsaImg from "../../Assets/Team/aqsa.png"; 
// import nabeerImg from "../../Assets/Team/nabeer.jpg";
// import sarwarImg from "../../Assets/Team/sarwar.jpg";
// import gilangImg from "../../Assets/Team/Gilang Ferdiansyah.jpg";
// import hibaImg from "../../Assets/Team/hiba.jpg"; 
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Home2() {
//   const teamMembers = [
//     {
//       name: "Aqsa",
//       title: "Frontend Developer",
//       imgPath: aqsaImg,
//     },
//     {
//       name: "Nabeer",
//       title: "Full Stack Developer",
//       imgPath: nabeerImg,
//     },
//     {
//       name: "Sarwar",
//       title: "Web Development Intern",
//       imgPath: sarwarImg,
//     },
//     {
//       name: "Gilang Ferdiansyah",
//       title: "Social Media Manager",
//       imgPath: gilangImg,
//     },
//     {
//       name: "Hiba",
//       title: "3D Modeler",
//       email: "hibadar1000@gamil.com",
//       imgPath: hibaImg,
//     },
//   ];

//   return (
//     <Container fluid className="home-about-section" id="about">
//       <Particle />
//       <Container>
//         <h1 style={{ fontSize: "2.6em", color: "#141F39" }}>
//           OUR <span className="purple"> TEAM </span> MEMBERS
//         </h1>
//         <Row className="team-members-row d-flex flex-wrap justify-content-center">
//           {teamMembers.map((member, index) => (
//             <Col md={4} className="project-card" key={index} style={{ flex: "0 0 auto" }}>
//               <TeamMemberCard
//                 imgPath={member.imgPath}
//                 name={member.name}
//                 title={member.title}
//               />
//             </Col>
//           ))}
//         </Row>
//         <Container fluid className="about-section">
//           <Particle />
//           <Container>
//             <Row style={{ justifyContent: "center", padding: "10px" }}>
//               <Col
//                 md={7}
//                 style={{
//                   justifyContent: "center",
//                   paddingTop: "30px",
//                   paddingBottom: "50px",
//                 }}
//               >
//               </Col>
//             </Row>
//             <h1 className="project-heading">
//             Technologies 
//             {/* <strong className="purple">Skillset </strong> */}
//             </h1>
//             <Techstack />
//             <h1 className="project-heading">
//               <strong className="purple">Tools</strong> We use
//             </h1>
//             <Toolstack />
           
//             <Github />
          
//           </Container>
//         </Container>
       
//       </Container>
//     </Container>
//   );
// }

// export default Home2;


import React from "react";
import "./Home2.css";
import TeamMemberCard from "./TeamMemberCard";
import Github from "./Github";
import Techstack from "./Techstack";
import Particle from "../Particle";
import Toolstack from "./Toolstack";
import aqsaImg from "../../Assets/Team/aqsa.jpg";
import nabeerImg from "../../Assets/Team/nabeer.jpg";
import sarwarImg from "../../Assets/Team/sarwar.jpg";
import gilangImg from "../../Assets/Team/Gilang Ferdiansyah.jpg";
import hibaImg from "../../Assets/Team/hiba.jpg";
import JustinImg from "../../Assets/Team/Justin.jpg";

function Home2() {
  const teamMembers = [
    { name: "Aqsa", title: "Frontend Developer", imgPath: aqsaImg },
    { name: "Nabeer", title: "Full Stack Developer", imgPath: nabeerImg },
    { name: "Sarwar", title: "Web Development Intern", imgPath: sarwarImg },
    { name: "Gilang Ferdiansyah", title: "Social Media Manager", imgPath: gilangImg },
    { name: "Hiba", title: "3D Modeler", imgPath: hibaImg },
    { name: "Justin", title: "UI / UX Designer", imgPath: JustinImg },
    // { name: "Hamna", title: "3D Sculping Intern", imgPath: aqsaImg },
  ];

  return (
    <div className="home-section" id="about">
      <Particle />
      <div className="home-section__content">
        <h1 className="home-section__title">
          OUR <span className="home-section__title--highlight">TEAM</span> MEMBERS
        </h1>
        <div className="home-section__team-list">
          {teamMembers.map((member, index) => (
            <div className="home-section__team-item" key={index}>
              <TeamMemberCard imgPath={member.imgPath} name={member.name} title={member.title} />
            </div>
          ))}
        </div>

        <div className="home-section__technologies">
          <h1 className="home-section__subheading">Technologies</h1>
          <Techstack />

          <h1 className="home-section__subheading">Tools We Use</h1>
          <Toolstack />

          <Github />
        </div>
      </div>
    </div>
  );
}

export default Home2;
