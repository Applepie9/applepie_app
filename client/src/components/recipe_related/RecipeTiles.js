import React, { useEffect, useState } from "react";
import CardComp from "./CardComp";
import { CardGroup } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function RecipeTiles() {
  const [recipes, setRecipes] = useState([]);
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
        setRecipes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
  }, []);

  return (
    <div
      className="space-around"
      style={{
        background: "var(--light)",
        padding: "10px",
        textAlign: "center",
        color: "white"
      }}
    >
      <h1 style={{color: "black"}}>Latest recipes</h1>
      <CardGroup className=" grid space-around card-list">
        <React.Fragment>
          {recipes
            .map((data) => (
              <CardComp
                key={data.id}
                onClick={() => navigate(`/recipe/${data.id}`)}
                recipeimage={data.photo_url}
                recipename={data.title}
              ></CardComp>
            ))
            .slice(-8)
            .reverse()}
        </React.Fragment>
      </CardGroup>
    </div>
  );
}
