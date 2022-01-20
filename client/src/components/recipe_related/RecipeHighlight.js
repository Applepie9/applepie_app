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
    <div className="card-container page">
      <React.Fragment>
        <h1 style={{ color: "black" }}>Try this recipe out</h1>
        <Card
          key={recipe.id}
          onClick={() => navigate(`/recipe/${recipe.id}`)}
          style={{ background: "var(--accent)" }}
        >
          <Card.Img
            variant="top"
            className="polaroid-img"
            src={recipe.photo_url}
          />
          <Card.Body>
            <Card.Text className="polaroid-title">{recipe.title}</Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    </div>
  );
}
