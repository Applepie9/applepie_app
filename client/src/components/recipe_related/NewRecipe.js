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
      onSubmit={handleSubmit}
      className="page recipe-container container-fluid"
    >
      <div className="row">
        <div className="col-lg-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/440px-VAN_CAT.png"
            className="show-img"
          />
          <p style={{ margin:"10px 0 0 35px" }}>
            Enjoy this cat picture until you finish creating a recipe ;)
          </p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 header-info-col" align="left">
          <div>
            <header>
              <h1>
                <textarea
                  type="text"
                  name="title"
                  placeholder="Add Title"
                  value={recipe.title}
                  onChange={handleChange}
                  required
                  className="titleform_input"
                />
              </h1>

              {/* <span className="abstract-text" align="left">
                  {recipe.description}
                </span> */}
            </header>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row" style={{ alignItems: "left" }}>
        <div className="col-md-1"></div>
        <div className="col-md-4 pt-4 content-container">
          <section className="ingredient-list">
            <h2>Ingredients</h2>
            <ul className="list-unstyled pl-4 ">
              <textarea
                type="text"
                name="ingredients"
                placeholder="Add Ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                required
                className="recipeform_input"
              />
            </ul>
          </section>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 pt-4 content-container" alignItems="left">
          <section className="instruction-list">
            <h2>Instructions</h2>
            <textarea
              type="text"
              name="content"
              placeholder="Add Description"
              value={recipe.content}
              onChange={handleChange}
              required
              className="recipeform_input"
            />
            {/* <h3>Notes</h3>
                <ul style={{ listStyle: "none" }}>
                  <li>{recipe.notes}</li>
                </ul> */}
          </section>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="recipeform_button_container">
        <div>
          <button type="submit" className="recipeform_button">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
