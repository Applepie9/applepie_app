import React from "react";
import { Card } from "react-bootstrap";
import "../../styling/CardComp.css";

export default function CardComp({ recipename, recipeimage, onClick }) {
  return (
    <div onClick={onClick}>
      <Card className={`card polaroid-container`} style={{background: "var(--dark)"}}>
        <Card.Img
          variant="top"
          src={recipeimage == null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/440px-VAN_CAT.png" : recipeimage}
          className="polaroid-img"
        />
        <Card.Body className="polaroid-body">
          <Card.Title className="polaroid-title">{recipename}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
