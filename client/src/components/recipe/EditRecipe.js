import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import UploadPhoto from "./UploadPhoto";
import CardComp from "./CardComp";
import { Card, CardGroup } from "react-bootstrap";


export default function NewRecipe() {
  let { recipeId } = useParams();
  let navigate = useNavigate();
  const [recipe, setRecipe] = useState({});
  const headers = {
    Authorization: `Bearer ${Cookies.get("session")}`,
    Accept: "application/json",
  };

  const handleChange = (event) => {
    const newValue = {
      ...recipe,
      ...{ [event.target.name]: event.target.value },
    };
    setRecipe(newValue);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/recipes/${recipeId}`, {
        withCredentials: true,
        headers,
      })
      .then(function (response) {
        setRecipe(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  const handleSubmit = (event) => {
    axios
      .put(
        `http://localhost:3000/api/recipes/${recipeId}`,
        { recipe: recipe },
        {
          withCredentials: true,
          headers,
        }
      )
      .then(function (response) {
        navigate(`/recipe/${response.data.id}`);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
    event.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0px 0px 0px 20px",
        padding: "10px",
      }}
    >
      <div>
        <CardComp
          key={recipe.id}
          recipeimage={recipe.photo_url}
          recipename={
            <textarea
              type="text"
              name="title"
              defaultValue={recipe.title}
              onChange={handleChange}
              required
            />
          }
          className="bg-dark text-white"
          style={{
            width: "500px",
            padding: "40px",
            textColor: "white",
          }}
        ></CardComp>
      </div>
      <UploadPhoto />
      <form
        style={{
          color: "black",
          margin: "0px 15px 0px 20px",
          padding: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ color: "black" }}>
          <CardGroup className="grid space-around">
            <Card border="secondary" style={{ width: "18rem" }}>
              <Card.Header style={{ fontSize: "25px" }}>
                Ingredients
              </Card.Header>
              <Card.Body>
                <textarea
                  type="text"
                  name="ingredients"
                  defaultValue={recipe.ingredients}
                  onChange={handleChange}
                  required
                />
              </Card.Body>
            </Card>

            <Card border="secondary" style={{ width: "30rem" }}>
              <Card.Header style={{ fontSize: "25px" }}>
                Instructions
              </Card.Header>
              <Card.Body>
                <textarea
                  type="text"
                  name="content"
                  defaultValue={recipe.content}
                  onChange={handleChange}
                  required
                />
              </Card.Body>
            </Card>
          </CardGroup>
          <button type="submit" style={{ margin: "0px 0px 0px 10px" }}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
