import React from "react";
import { loggedIn } from "../utils/auth";
import Logout from "./auth/Logout";
import "../index.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Toolbar() {
  return (
    <Navbar bg="dark" fixed="top" variant="dark" style={{padding: "10px", margin: "25px 25px 50px 25px"}}>
      <Container>
        <Navbar.Brand href="/">applepie-app</Navbar.Brand>
        <Nav style={{float: "right"}}>
          <Nav.Item>
            {loggedIn() ? (
              <>
              <Nav.Link href="/recipe/new">New</Nav.Link>
              <Logout />
              </>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
