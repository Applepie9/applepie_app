import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../../styling/Forms.css";

export default function Register() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [failure, setFailure] = useState(false);

  const handleChange = (event) => {
    const newValue = {
      ...credentials,
      ...{ [event.target.name]: event.target.value },
    };
    setCredentials(newValue);
  };

  const handleSubmit = (event) => {
    axios
      .post(
        `http://localhost:3000/api/users`,
        {
          email: credentials.email,
          password: credentials.password,
          password_confirmation: credentials.password_confirmation,
        },
        {
          withCredentials: true,
          headers: {
            "Client-Id": "ON5KyEPfHZeSxUVc9umKP9X3UlLpbOoYpu0AnlD-wV4",
          },
        }
      )
      .then((response) => {
        Cookies.set("session", response.data.user.access_token, { expires: 7 });
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("login error", error);
        setFailure(true);
      });
    event.preventDefault();
  };

  return (
    <div className="logcontainer">
      {failure && (
        <label className="logform__input-error-message">
          Something went wrong
        </label>
      )}
      <form onSubmit={handleSubmit} className="logform">
        <h1 className="logform__title">Create an account</h1>
        <div className="logform__message logform__message--error"></div>
        <div className="logform__input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
            className="logform__input"
          />
        </div>
        <div className="logform__input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="logform__input"
          />
        </div>
        <div className="logform__input-group">
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={credentials.password_confirmation}
            onChange={handleChange}
            required
            className="logform__input"
          />
        </div>
        <button className="logform__button" type="submit">
          Register
        </button>
        <p class="logform__text">
          <a class="logform__link" href="/login">
            Already have an account? Sign in
          </a>
        </p>
      </form>
    </div>
  );
}
