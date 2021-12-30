import React from "react";
import CardComp from "./CardComp";
import { CardGroup } from "react-bootstrap";

export default function ShowAll() {
  return (
    <div
      className="space-around"
      style={{ margin: "0px 15px 0px 15px", padding: "10px", textAlign: "center" }}
    >
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
          recipeimage={"/salted-caramel-apple-pie.jpeg"}
          avatar={`https://universe.leagueoflegends.com/en_US/champions`}
          recipename={"Applepie3"}
        ></CardComp>
      </CardGroup>
    </div>
  );
}
