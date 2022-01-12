import React from "react";
import { Card } from "react-bootstrap";

export default function CardComp({ recipename, recipeimage, onClick }) {
  return (
    <div onClick={onClick}>
      <Card className={`card bg-dark`} style={{ width: "18rem", height: "24rem" }}>
        <Card.Img
          variant="top"
          src={recipeimage == null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/440px-VAN_CAT.png" : recipeimage}
          style={{ padding: "20px", height: "250px" }}
        />
        <Card.Body style={{ textAlign: "left", }}>
          <Card.Title style={{ fontSize: "20px", margin: "0px 20px 10px 10px", color: "white"}}>{recipename}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
