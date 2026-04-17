import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">AI Study Assistant</h2>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/upload" className="nav-link">Upload</Link>
      </div>
    </nav>
  );
}

export default Navbar;