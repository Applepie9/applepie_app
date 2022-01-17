import React, { useEffect, useState } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import CardComp from "./CardComp";
import { loggedIn } from "../../utils/auth";
import ConfirmModal from "../ConfirmModal";

export default function ShowRecipe() {
  let { recipeId } = useParams();
  let navigate = useNavigate();
  const [recipe, setRecipe] = useState({});
  const headers = {
    Authorization: `Bearer ${Cookies.get("session")}`,
    Accept: "application/json",
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

  const handleDelete = (event) => {
    axios
      .delete(`http://localhost:3000/api/recipes/${recipeId}`, {
        withCredentials: true,
        headers,
      })
      .then(function () {
        navigate(`/`);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  return (
    <div
      style={{
        margin: "100px 0px 0px 0px",
        padding: "20px",
        background: "var(--light)"
      }}
    >
      {loggedIn() ? (
        <>
          <button onClick={() => navigate(`/recipe/${recipe.id}/edit`)}>
            Edit
          </button>
          <ConfirmModal
            buttonName="Delete"
            handleSomething={handleDelete}
          ></ConfirmModal>
        </>
      ) : (
        <></>
      )}
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
              <Card.Text>{recipe.content}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}
