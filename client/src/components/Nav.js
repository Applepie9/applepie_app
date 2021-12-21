import React from "react";
import { Link } from "react-router-dom";
import { loggedIn } from "../utils/auth.js";
import Logout from "./auth/Logout.js";

export default function Nav() {
  return (
    <nav>
      {loggedIn() ? (
        <Logout />
      ) : (
        <div>
          <Link to="login">Login</Link> <Link to="register">Register</Link>
        </div>
      )}
    </nav>
  );
}
