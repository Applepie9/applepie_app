import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Nav from "./components/Nav";
// import Loading from "./components/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NotFound from "./components/NotFound";
import Toolbar from "./components/Toolbar";
import Recipe from "./components/Recipe";

ReactDOM.render(
  <BrowserRouter>
    <Toolbar></Toolbar>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
