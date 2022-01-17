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
        background: "var(--light)",
        display: "flex",
        flexDirection: "column",
        margin: "100px 0 0 0",
        padding: "20px 0 20px 0",
      }}
    >
      <div style={{ padding: "0 0 0 20px" }}>
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
      <div style={{ padding: "0 0 0 20px" }}>
        <UploadPhoto />
      </div>
      <form
        style={{
          color: "black",
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ color: "black", padding: "20px" }}>
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
          <div style={{ margin: "20px 30px 50px 10px" }}>
            <button type="submit" style={{ float: "right" }}>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
