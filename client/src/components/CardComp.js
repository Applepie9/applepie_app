import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "../index.css";

export default function CardComp({ recipename, recipeimage, onClick }) {
  return (
    <div onClick={onClick}>
      <Card className={`card bg-dark`} style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={recipeimage}
          style={{ padding: "20px", height: "250px" }}
        />
        <Card.Body>
          <Card.Title>{recipename}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

CardComp.propTypes = {
  recipename: PropTypes.string.isRequired,
};
