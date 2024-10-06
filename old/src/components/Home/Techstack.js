// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import "./Techstack.css";
// import { SiMicrosoftoffice } from 'react-icons/si';
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {


//   SiNextdotjs,
//   SiAdobeillustrator,
//   SiAdobephotoshop,
//   SiPostgresql,
// } from "react-icons/si";
// import { SiAdobepremierepro } from 'react-icons/si';





// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <CgCPlusPlus />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiAdobeillustrator />
//      </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//     <SiAdobephotoshop />
//     </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiNextdotjs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiGit />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//       <SiAdobepremierepro />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//       <SiMicrosoftoffice /> 
//     </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostgresql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;


import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava } from "react-icons/di";
import {
  SiNextdotjs,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiPostgresql,
  SiAdobepremierepro,
  SiMicrosoftoffice
} from "react-icons/si";
import "./Techstack.css";

function Techstack() {
  return (
    <div className="tech-icons-container">
      <div className="tech-icons">
        <CgCPlusPlus />
      </div>
      <div className="tech-icons">
        <DiJavascript1 />
      </div>
      <div className="tech-icons">
        <SiAdobeillustrator />
      </div>
      <div className="tech-icons">
        <DiNodejs />
      </div>
      <div className="tech-icons">
        <DiReact />
      </div>
      <div className="tech-icons">
        <SiAdobephotoshop />
      </div>
      <div className="tech-icons">
        <DiMongodb />
      </div>
      <div className="tech-icons">
        <SiNextdotjs />
      </div>
      <div className="tech-icons">
        <DiGit />
      </div>
      <div className="tech-icons">
        <SiAdobepremierepro />
      </div>
      <div className="tech-icons">
        <SiMicrosoftoffice />
      </div>
      <div className="tech-icons">
        <SiPostgresql />
      </div>
      <div className="tech-icons">
        <DiPython />
      </div>
      <div className="tech-icons">
        <DiJava />
      </div>
    </div>
  );
}

export default Techstack;
