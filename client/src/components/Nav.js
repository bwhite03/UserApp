import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link
        to="/"
        className="navbar-brand"
        style={{ color: "white", fontSize: "25px" }}
      >
        UserApp
      </Link>
      <button className="navbar-toggler">
        <span
          className="navbar-toggler-icon"
          data-toggle="collapse"
          data-target="#navbar-menu"
        />
      </button>
      <div className="collapse navbar-collapse" id="navbar-menu">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/add">
              Add
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
