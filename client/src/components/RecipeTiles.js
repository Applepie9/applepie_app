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
        // handle success
        // console.log(response);

        setRecipes(response.data);
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
      className="space-around"
      style={{
        margin: "0px 15px 0px 15px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <CardGroup className=" grid space-around card-list">
        <React.Fragment>
          {recipes.map((data) => (
            <CardComp
              key={data.id}
              onClick={() => navigate(`/recipe/${data.id}`)}
              recipeimage={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/440px-VAN_CAT.png"
              }
              recipename={data.title}
            ></CardComp>
          )).slice(-6).reverse()}
        </React.Fragment>
      </CardGroup>
    </div>
  );
}
