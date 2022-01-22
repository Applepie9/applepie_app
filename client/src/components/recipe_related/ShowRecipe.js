import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { loggedIn } from "../../utils/auth";
import ConfirmModal from "../ConfirmModal";
import "../../styling/SingleRecipe.css";

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
    <div className="page recipe-container container-fluid">
      {loggedIn() ? (
        <div className="row, col-lg-4 edit_del_btn_container">
          <div className="">
            <button
              onClick={() => navigate(`/recipe/${recipe.id}/edit`)}
              className="recipeform_button"
            >
              Edit
            </button>
          </div>
          <div className="col-md-3">
            <ConfirmModal
              buttonName="Delete"
              handleSomething={handleDelete}
            ></ConfirmModal>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="row">
        <div className="col-lg-5">
          <img src={recipe.photo_url} alt={recipe.title} className="show-img" />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 header-info-col" align="left">
          <div>
            <header>
              <h1>{recipe.title}</h1>
              <span className="abstract-text" align="left">
                {recipe.description}
              </span>
            </header>
          </div>
        </div>
      </div>

      <div className="row" style={{ alignItems: "left" }}>
        <div className="col-md-1"></div>
        <div className="col-md-4 pt-4 content-container">
          <section className="ingredient-list">
            <h2>Ingredients</h2>
            <ul className="list-unstyled pl-4 ">
              {/* MAP */}
              <li>
                <div style={{ display: "inline" }}>{recipe.ingredients}</div>
              </li>
            </ul>
          </section>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 pt-4 content-container">
          <section className="instruction-list">
            <h2>Instructions</h2>
            {/* MAP */}
            <ol>
              <li>{recipe.content}</li>
            </ol>
            {/* <h3>Notes</h3>
                <ul style={{ listStyle: "none" }}>
                  <li>{recipe.notes}</li>
                </ul> */}
          </section>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}
