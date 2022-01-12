import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export default function UploadPhoto() {
  let navigate = useNavigate();
  const [photoPath, setPhotoPath] = useState("");
  const { recipeId } = useParams();

  const handleChange = (event) => {
    setPhotoPath(event.target.value);
  };
  const headers = {
    Authorization: `Bearer ${Cookies.get("session")}`,
    Accept: "application/json",
  };

  const handleSubmit = (event) => {
    const formData = new FormData();
    const imagefile = document.querySelector("input[type=file]");
    formData.append("file", imagefile.files[0]);

    axios
      .put(`http://localhost:3000/api/recipes/${recipeId}/upload`, formData, {
        withCredentials: true,
        headers,
      })
      .then(function (response) {
        // navigate(`/recipe/${response.data.id}`);
        window.location.reload();
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
      style={{
        padding: "0px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      Upload Photo:
      <label>
        <input
          type="file"
          name="file"
          accept="image/*"
          value={photoPath}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <button type="submit" style={{ margin: "10px 0px 0px 0px" }}>
          Upload
        </button>
      </label>
    </form>
  );
}
