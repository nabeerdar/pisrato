
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";


// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// function Footer() {
//   let date = new Date();
//   let year = date.getFullYear();
//   return (
//     <Container fluid className="footer">
//       <Row>
//       <Col md="4" className="footer-copywright">
//           <h3>
//             Theme sourced from{" "}
//             <Link to="/ThemeSource" style={{ color: "white" }}>
//               this website
//             </Link>
//           </h3>
//         </Col>
       
//         <Col md="4" className="footer-copywright">
//           <h3>Copyright © {year} </h3>
//         </Col>
      
       
//         <Col md="4" className="footer-body">
//           <ul className="footer-icons">
//             <li className="social-icons">
//               <a
//                 href=""
//                 style={{ color: "white" }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <AiFillGithub />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href=""
//                 style={{ color: "white" }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <AiOutlineTwitter />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href=""
//                 style={{ color: "white" }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href=""
//                 style={{ color: "white" }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <AiFillInstagram />
//               </a>
//             </li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ThemeSource from "./ThemeSource"; // Import the ThemeSource component

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const [showThemeSource, setShowThemeSource] = useState(false);

  const handleThemeSourceClick = () => {
    setShowThemeSource(!showThemeSource);
  };

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            Theme sourced from{" "}
            <span
              onClick={handleThemeSourceClick}
              style={{ color: "white", cursor: "pointer", textDecoration: "underline" }}
            >
              this website
            </span>
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      {showThemeSource && <ThemeSource />} {/* Conditionally render ThemeSource */}
    </Container>
  );
}

export default Footer;
