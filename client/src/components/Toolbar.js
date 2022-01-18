import React, { useState, useEffect } from "react";
import { loggedIn } from "../utils/auth";
import Logout from "./auth/Logout";
import { Link } from "react-router-dom";
import "../styling/Toolbar.css";
import { FaBars } from 'react-icons/fa'

export default function Toolbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    window.innerWidth <= 960 ? setButton(false) : setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar" style={{position: 'fixed'}}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <span>applepie-app</span>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaBars className="fa-times"/> : <FaBars className="fa-bars"/>}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          {loggedIn() ? (
            <>
              <li className="nav-item">
                <Link
                  to="/recipe/new"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  New Recipe
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Profile
                </Link>
              </li> */}
              <li
                className="nav-item nav-links"
                onClick={closeMobileMenu}
              >
                <Logout />
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/register"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
