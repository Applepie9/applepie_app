import React from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function Logout() {
  const HandleLogout = (event) => {
    axios
      .post(
        `http://localhost:3000/api/sessions/revoke`,
        {},
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${Cookies.get("session")}`,
          },
        }
      )
      .then((_response) => {
        Cookies.remove("session");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("login error", error);
      });
    event.preventDefault();
  };

  return <button onClick={(e) => HandleLogout(e)}>Logout</button>;
}
