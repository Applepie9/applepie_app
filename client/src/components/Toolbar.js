import React from "react";
import { Link } from "react-router-dom";
import { loggedIn } from "../utils/auth";
import Logout from "./auth/Logout";
import "../index.css";
import { Navbar, Container, Nav } from "react-bootstrap";

// export default function Toolbar() {
//   return (
//     <nav >
//       {loggedIn() ? (
//         <Logout />
//       ) : (
//         <div>
//           <Link to="login">Login</Link> <Link to="register">Register</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

export default function Toolbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">applepie-app</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Item>
            {loggedIn() ? (
              <Logout />
            ) : (
              <>
                <Nav.Link href="login">Login</Nav.Link>
                <Nav.Link href="register">Register</Nav.Link>
              </>
            )}
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
