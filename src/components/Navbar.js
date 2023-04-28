import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="container-md">
        <Link className="navbar-brand" to="/">
          <h1>🏡</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;
