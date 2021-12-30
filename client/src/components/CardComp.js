import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "../index.css";

export default function CardComp({ avatar, recipename, recipeimage }) {
  return (
    <a href={avatar}>
      <Card className={`card bg-dark`} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={recipeimage} style={{ padding: "20px", height: "250px"}} />
        <Card.Body>
          <Card.Title>{recipename}</Card.Title>
        </Card.Body>
      </Card>
    </a>
  );
}

CardComp.propTypes = {
  avatar: PropTypes.string.isRequired,
  recipename: PropTypes.string.isRequired,
};
