import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

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
            "Client-Id": 'ON5KyEPfHZeSxUVc9umKP9X3UlLpbOoYpu0AnlD-wV4',
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
    <div
      style={{
        margin: "100px 15px 30px 15px",
        border: "20px",
        padding: "10px",
      }}
    >
      {failure && <label>Something went wrong</label>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password_confirmation"
          placeholder="Password confirmation"
          value={credentials.password_confirmation}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
