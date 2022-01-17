import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../../styling/LoginRegister.css";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [failure, setFailure] = useState(false);

  const handleChange = (event) => {
    const newValue = {
      ...credentials,
      ...{ [event.target.name]: event.target.value },
    };
    console.log("valami");
    setCredentials(newValue);
  };

  const handleSubmit = (event) => {
    axios
      .post(
        `http://localhost:3000/api/sessions`,
        {
          email: credentials.email,
          password: credentials.password,
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
        <h1 className="logform__title">Login</h1>
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
        <button className="logform__button" type="submit">
          Continue
        </button>
        {/* <p className="logform__text">
          <a href="#" className="logform__link">
            Forgot your password?
          </a>
        </p> */}
        <p className="logform__text">
          <a className="logform__link" href="/register">
            Don't have an account? Create account
          </a>
        </p>
      </form>
    </div>
  );
}
