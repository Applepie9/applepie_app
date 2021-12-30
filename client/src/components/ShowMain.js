import React from "react";
import { Card } from "react-bootstrap";

export default function ShowAll() {
  return (
    <div style={{ margin: "0px 15px 0px 15px", padding: "10px" }}>
      <a href={`https://www.pickuplimes.com`}>
        <Card
          className="bg-dark text-white"
          style={{
            width: "500px",
            padding: "40px",
          }}
        >
          <Card.Img
            variant="top"
            src="/salted-caramel-apple-pie.jpeg"
            style={{ height: "250px" }}
          />
          <Card.Body>
            <Card.Title>Salted Caramel Apple Pie</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

