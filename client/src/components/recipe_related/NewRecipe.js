import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Card, CardGroup } from "react-bootstrap";

export default function NewRecipe() {
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

  const handleSubmit = (event) => {
    axios
      .post(
        "http://localhost:3000/api/recipes",
        { recipe: recipe },
        {
          withCredentials: true,
          headers,
        }
      )
      .then(function (response) {
        navigate(`/recipe/${response.data.id}/edit`);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
    event.preventDefault();
  };

  return (
    <form
      style={{
        color: "black",
        margin: "100px 0 0 0",
        padding: "20px",
        background: "var(--light)",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <label style={{ padding: "10px" }}>
          Title:
          <textarea
            type="text"
            name="title"
            placeholder="Add Title"
            value={recipe.title}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div style={{ color: "black" }}>
        <CardGroup className="grid space-around">
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Header style={{ fontSize: "25px" }}>Ingredients</Card.Header>
            <Card.Body>
              <textarea
                type="text"
                name="ingredients"
                placeholder="Add Ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                required
              />
            </Card.Body>
          </Card>

          <Card border="secondary" style={{ width: "30rem" }}>
            <Card.Header style={{ fontSize: "25px" }}>Instructions</Card.Header>
            <Card.Body>
              <textarea
                type="text"
                name="content"
                placeholder="Add Description"
                value={recipe.content}
                onChange={handleChange}
                required
              />
            </Card.Body>
          </Card>
        </CardGroup>
        <div style={{ margin: "20px 30px 50px 10px", }}>
          <button type="submit" style={{float: "right" }}>Save</button>
        </div>
      </div>
    </form>
  );
}
