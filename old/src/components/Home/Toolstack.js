// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import "./Techstack.css";
// import {
//   SiVisualstudiocode,
//   SiZoom,
//   SiChatbot,
//   SiJupyter,
//   SiMacos,
// } from "react-icons/si";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMacos />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiZoom />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiChatbot />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiJupyter />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;



import React from "react";
import "./Techstack.css";
import { SiVisualstudiocode, SiZoom, SiChatbot, SiJupyter, SiMacos } from "react-icons/si";

function Toolstack() {
  return (
    <div className="tech-icons-container">
      <div className="tech-icons">
        <SiMacos />
      </div>
      <div className="tech-icons">
        <SiVisualstudiocode />
      </div>
      <div className="tech-icons">
        <SiZoom />
      </div>
      <div className="tech-icons">
        <SiChatbot />
      </div>
      <div className="tech-icons">
        <SiJupyter />
      </div>
    </div>
  );
}

export default Toolstack;
