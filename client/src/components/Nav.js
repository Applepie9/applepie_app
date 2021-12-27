import React from "react";
import { Link } from "react-router-dom";
import { loggedIn } from "../utils/auth";
import Logout from "./auth/Logout";
import "../index.css";
import { Navbar, Container } from "react-bootstrap";

export default function Nav() {
  return (
    <nav >
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

// export default function Nav() {
//   return (
//     <Navbar bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">applepie-app</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           {loggedIn() ? (
//             <Logout />
//           ) : (
//             <div>
//               <Nav.Link to="login">Login</Nav.Link>
//               <Nav.Link to="register">Register</Nav.Link>
//             </div>
//           )}
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }
