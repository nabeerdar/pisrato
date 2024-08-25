// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";

// function Github() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//       <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
//         Days I <strong className="purple">Code</strong>
//       </h1>
//       <GitHubCalendar
//         username="soumyajit4419"
//         blockSize={15}
//         blockMargin={5}
//         color="#c084f5"
//         fontSize={16}
//       />
//     </Row>
//   );
// }

// export default Github;







// import React from 'react';
// import './Github.css';
// import sampleVector from '../../Assets/vector.png';
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// const Github = () => {
//     return (
//         <div className="section-layout">
//             <div className="upper-container">
//                 <div className="vectorz-image">
//                     <img src={sampleVector} alt="Sample Vector" />
//                 </div>

           
//             </div>

//             <div className="cardz-container">
//                 <div className="cardz">
//                     <h2>Talk to us and get your project moving!</h2>
//                     <form>
//                         <div className="input-group">
//                             <input type="text" placeholder="Name*" />
//                             <input type="email" placeholder="Email*" />
//                         </div>
//                         <div className="input-group">
//                             <input type="tel" placeholder="Phone (Optional)" />
//                             <select>
//                                 <option>Select budget*</option>
//                                 <option>$500 - $1000</option>
//                                 <option>$1000 - $5000</option>
//                                 <option>$5000+</option>
//                             </select>
//                         </div>
//                         <textarea placeholder="Enter your message*" />
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             </div>

//             <div className="lower-container">
//                 <div className="footer-content">
//                     <h3>Footer Information</h3>
//                     <p>Contact details or address information goes here.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Github;




import React from 'react';
import './Github.css';
import logo from "../../Assets/logo.png";
import sampleVector from '../../Assets/vector.png';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Github = () => {
  return (
    <div className="git-section-layout">
      <div className="git-upper-container">
        <div className="git-vectorz-image">
          <img src={sampleVector} alt="Sample Vector" />
        </div>
      </div>

      <div className="cardz-container">
                 <div className="cardz">
                     <h2>Talk to us and get your project moving!</h2>
                     <form>
                         <div className="input-group">
                             <input type="text" placeholder="Name*" />
                             <input type="email" placeholder="Email*" />
                         </div>
                         <div className="input-group">
                             <input type="tel" placeholder="Phone (Optional)" />
                             <select>
                                 <option>Select budget*</option>
                                 <option>$500 - $1000</option>
                                 <option>$1000 - $5000</option>
                                 <option>$5000+</option>
                             </select>
                         </div>
                         <textarea placeholder="Enter your message*" />
                         <button type="submit">Submit</button>
                     </form>
                 </div>
             </div>

      <div className="git-lower-container">
        <div className="git-footer-row">
          <div className="git-footer-logo">
          <img src={logo} alt="logo" />
            {/* <div className="git-social-icons">
              <AiFillGithub />
              <AiOutlineTwitter />
              <FaLinkedinIn />
              <AiFillInstagram />
            </div> */}
          </div>
        </div>
        
        <div className="git-footer-row">
          <h3 className="purples">Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="git-footer-row">
          <h3 className="purples">Services</h3>
          <ul>
            <li>Full Stack Development</li>
            <li>Mobile App Development</li>
            <li>Website Development</li>
            <li>DevOps Consultancy</li>
            <li>Digital Marketing</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div className="git-footer-row">
          <h3 className="purples">Support</h3>
          <ul>
            <li><b>Email us at:</b><br/>support@company.com</li>
            <li><b>Contact us at:</b><br/> +123 456 7890</li>
            <li><b>Whatsapp at:</b><br/>+123 456 7890</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Github;
