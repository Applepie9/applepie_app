import React from "react";
import { Card } from "react-bootstrap";
import "../../styling/Cards.css";

export default function CardComp({ recipename, recipeimage, onClick }) {
  return (
    <div onClick={onClick} className="card-container">
      <Card
        className="card"
        style={{ background: "var(--dark)" }}
      >
        <Card.Img
          variant="top"
          className="polaroid-img"
          src={
            recipeimage == null
              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/440px-VAN_CAT.png"
              : recipeimage
          }
          />
        <Card.Body>
          <Card.Title className="polaroid-title">{recipename}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
