import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import CardComp from "./CardComp";

export default function ShowRecipe() {
  let { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/recipes/${recipeId}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${Cookies.get("session")}`,
          Accept: "application/json",
        },
      })
      .then(function (response) {
        // handle success
        setRecipe(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div
      style={{
        margin: "0px 15px 0px 15px",
        padding: "10px",
      }}
    >
      <CardComp
        key={recipe.id}
        recipeimage={recipe.photo_url}
        recipename={recipe.title}

        className="bg-dark text-white"
        style={{
          width: "500px",
          padding: "40px",
        }}
      ></CardComp>

      <div style={{ color: "black" }}>
        <CardGroup className="grid space-around">
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Header style={{ fontSize: "25px" }}>Ingredients</Card.Header>
            <Card.Body>
              <Card.Text>{recipe.ingredients}</Card.Text>
            </Card.Body>
          </Card>

          <Card border="secondary" style={{ width: "30rem" }}>
            <Card.Header style={{ fontSize: "25px" }}>Instructions</Card.Header>
            <Card.Body>
              <Card.Text>
                <li>{recipe.content}</li>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}
