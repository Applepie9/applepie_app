import React from "react";
import CardComp from "./CardComp";
import { Card, CardGroup } from "react-bootstrap";

export default function ShowAll() {
  return (
    <div style={{ margin: "0px 25px 50px 25px", padding: "10px" }}>
      <div>
        <a href={`https://www.nosalty.hu`}>
          <Card
            className="bg-dark text-white"
            style={{
              margin: "0px 0px 50px 0px",
              border: "15px",
              width: "500px",
            }}
          >
            <Card.Img variant="top" src="holder.js/792px180" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </div>

      <div className="space-around">
        <CardGroup className=" grid space-around card-list">
          <CardComp
            recipeimage={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/440px-VAN_CAT.png"
            }
            avatar={`https://www.nosalty.hu`}
            recipename={"Applepie0"}
          ></CardComp>
          <CardComp
            recipeimage={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/440px-VAN_CAT.png"
            }
            avatar={`https://www.streetkitchen.hu`}
            recipename={"Applepie1"}
          ></CardComp>
          <CardComp
            recipeimage={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/440px-VAN_CAT.png"
            }
            avatar={`https://react-bootstrap.netlify.app/components/cards`}
            recipename={"Applepie2"}
          ></CardComp>
          <CardComp
            recipeimage={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/440px-VAN_CAT.png"
            }
            avatar={`https://universe.leagueoflegends.com/en_US/champions`}
            recipename={"Applepie3"}
          ></CardComp>
        </CardGroup>
      </div>
    </div>
  );
}
