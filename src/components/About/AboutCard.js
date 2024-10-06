import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone,   We are a team passionate about technology and innovation.
             <span>Aqsa is a talented </span>
             <span className="purple">Frontend Developer</span>, skilled in crafting beautiful and responsive web interfaces.
            <br />
            <span> Nabeer is a versatile</span>
            <span className="purple"> Full Stack Developer</span>, proficient in both frontend and backend development to build robust and scalable applications.
            <br />
            <span> Gilang Ferdiansyah is our </span>
            <span className="purple">Proof Reader</span>, Adept at proofreading and ensuring all written materials are accurate and polished before publication.
            <br />
            <span >  Hiba is our </span>
             <span className="purple"> 3D Modeler</span>
             ,  bringing ideas to life with detailed and realistic 3D models.
            <br />
            <span >  Sarwar is our </span>
             <span className="purple"> Backend intern</span>
             ,  Eager to learn and contribute to developing cutting-edge web applications as a backend developer.
            <br />
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Bringing your vision to life on the web."{" "}
          </p>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
