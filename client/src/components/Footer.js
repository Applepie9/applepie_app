import React from "react";
import "../styling/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        {/* <div className="footer-link-wrapper">
          <Link className="footer-link-items" to="/about">
            About
          </Link>
          <Link className="footer-link-items" to="/contact">
            Contact
          </Link>
        </div> */}
        <small className="rights-reserved">applepie-app © 2021-2022</small>
      </div>
    </div>
  );
}
