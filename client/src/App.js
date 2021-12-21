import './App.css';
import { Link } from "react-router-dom";
import { loggedIn } from "./utils/auth.js"
import Logout from "./components/auth/Logout.js";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <nav>
      { loggedIn() ? <Logout /> : 
        <div>
          <Link to="login">Login</Link>
          {" "}
          <Link to="register">Register</Link>
        </div>
      }
        
      </nav>
        
      {/* </header> */}
    </div>
  );
}

export default App;
