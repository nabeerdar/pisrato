
import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function TeamMemberCard({ imgPath, name, title, }) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        alt="card-img"
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          margin: "0 auto",
          borderRadius: "10%" // This will make the image fully round
        }}
        
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" >{title}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

TeamMemberCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TeamMemberCard;
