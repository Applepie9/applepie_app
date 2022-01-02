import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function NewRecipe() {
  let navigate = useNavigate();
  const [recipe, setRecipe] = useState({});
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
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
        navigate(`/recipe/${response.data.id}`);
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
        margin: "0px 15px 0px 20px",
        padding: "10px",
      }}
      onSubmit={handleSubmit}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label style={{ padding: "10px" }}>
          Title:
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={recipe.title}
            onChange={handleChange}
            required
          />
        </label>
        <label style={{ padding: "10px" }}>
          Description:
          <input
            type="text"
            name="content"
            placeholder="Description"
            value={recipe.content}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit" style={{ margin: "0px 0px 0px 10px" }}>
        Save
      </button>
    </form>
  );
}
