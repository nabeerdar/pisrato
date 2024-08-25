import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TeamMemberCard from "./TeamMemberCard"; 
import Github from "./Github";

import Techstack from "./Techstack";
import Particle from "../Particle";
import Toolstack from "./Toolstack";
import aqsaImg from "../../Assets/Team/aqsa.png"; 
import nabeerImg from "../../Assets/Team/nabeer.jpg";
import sarwarImg from "../../Assets/Team/sarwar.jpg";
import gilangImg from "../../Assets/Team/Gilang Ferdiansyah.jpg";
import hibaImg from "../../Assets/Team/hiba.jpg"; 
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const teamMembers = [
    {
      name: "Aqsa",
      title: "Frontend Developer",
      imgPath: aqsaImg,
    },
    {
      name: "Nabeer",
      title: "Full Stack Developer",
      imgPath: nabeerImg,
    },
    {
      name: "Sarwar",
      title: "Web Development Intern",
      imgPath: sarwarImg,
    },
    {
      name: "Gilang Ferdiansyah",
      title: "Social Media Manager",
      imgPath: gilangImg,
    },
    {
      name: "Hiba",
      title: "3D Modeler",
      email: "hibadar1000@gamil.com",
      imgPath: hibaImg,
    },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <h1 style={{ fontSize: "2.6em", color: "#141F39" }}>
          OUR <span className="purple"> TEAM </span> MEMBERS
        </h1>
        <Row className="team-members-row d-flex flex-wrap justify-content-center">
          {teamMembers.map((member, index) => (
            <Col md={4} className="project-card" key={index} style={{ flex: "0 0 auto" }}>
              <TeamMemberCard
                imgPath={member.imgPath}
                name={member.name}
                title={member.title}
              />
            </Col>
          ))}
        </Row>
        <Container fluid className="about-section">
          <Particle />
          <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >
              </Col>
            </Row>
            <h1 className="project-heading">
            Technologies 
            {/* <strong className="purple">Skillset </strong> */}
            </h1>
            <Techstack />
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> We use
            </h1>
            <Toolstack />
           
            <Github />
          
          </Container>
        </Container>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Home2;
