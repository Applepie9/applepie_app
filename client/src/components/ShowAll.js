import React from "react";
import CardComp from "./CardComp";
import { Card, CardGroup } from "react-bootstrap";

export default function ShowAll() {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img variant="top" src="holder.js/792px180" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="space-around">
          <CardGroup className=" grid space-around card-list">
            <CardComp
              avatar={`https://www.nosalty.hu`}
              recipename={"Applepie0"}
            ></CardComp>
            <CardComp
              avatar={`https://www.streetkitchen.hu`}
              recipename={"Applepie1"}
            ></CardComp>
            <CardComp
              avatar={`https://www.streetkitchen.hu`}
              recipename={"Applepie2"}
            ></CardComp>
            <CardComp
              avatar={`https://www.streetkitchen.hu`}
              recipename={"Applepie3"}
            ></CardComp>
          </CardGroup>
      </div>
    </div>
  );
}
