import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="logo">Vidr</h1>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <h3 className="about">About</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
