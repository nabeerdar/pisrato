// import React from "react";
// import Card from "react-bootstrap/Card";
// import "./ProjectCards.css";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

// function ProjectCards(props) {
//   return (
//     <Card className="project-card-views">
//       <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//         <Button variant="primary" href={props.ghLink} target="_blank">
//           <BsGithub /> &nbsp;
//           {props.isBlog ? "Blog" : "GitHub"}
//         </Button>
//         {"\n"}
//         {"\n"}


//         {!props.isBlog && props.demoLink && (
//           <Button
//             variant="primary"
//             href={props.demoLink}
//             target="_blank"
//             style={{ marginLeft: "10px" }}
//           >
//             <CgWebsite /> &nbsp;
//             {"Demo"}
//           </Button>
//         )}
//       </Card.Body>
  
//     </Card>
   
//   );
// }
// export default ProjectCards;



import React from "react";
import "./ProjectCards.css";

function ProjectCard(props) {
  return (
    <div className="new-project-card">
      <img className="new-card-img" src={props.imgPath} alt="card-img" />
      <div className="card-body">
        <h5 className="new-card-title">{props.title}</h5>
        <p className="new-card-text">{props.description}</p>
        <a
          href={props.ghLink}
          target="_blank"
          rel="noopener noreferrer"
          className="new-card-link"
        >
          {props.isBlog ? "Blog" : "GitHub"}
        </a>
        {!props.isBlog && props.demoLink && (
          <a
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="new-card-link new-demo-link"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
