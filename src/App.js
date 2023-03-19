import "./App.css";
import Counter from "./component/Counter";
import About from "./component/About";
import Gallery from "./component/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand nav-brand m-2">
        <ul className="navbar-nav">
          <li>
            <Link className=" nav-link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className=" nav-link" to="/coiunter">
              Coiunter
            </Link>
          </li>
          <li>
            <Link className=" nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className=" nav-link" to="/gallery">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/home"></Route>
          <Route path="/coiunter" Component={Counter}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/gallery" Component={Gallery}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
