import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function RecipeHighlight() {
  const [recipe, setRecipe] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/recipes", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${Cookies.get("session")}`,
          Accept: "application/json",
        },
      })
      .then(function (response) {
        const randomElement =
          response.data[Math.floor(Math.random() * response.data.length)];
        setRecipe(randomElement);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  return (
    <div style={{ margin: "50px 15px 0px 15px", padding: "10px" }}>
      <React.Fragment>
        Try this recipe out
        <Card key={recipe.id} onClick={() => navigate(`/recipe/${recipe.id}`)}>
          <Card.Img variant="top" src={recipe.photo_url} />
          <Card.Body>
            <Card.Text>{recipe.title}</Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    </div>
  );
}
