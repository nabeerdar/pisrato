

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
