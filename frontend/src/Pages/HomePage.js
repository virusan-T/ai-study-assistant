import React from "react";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container">
      
      <h1 className="title">AI Study Assistant</h1>

      <p className="text">
        Learn smarter with AI
      </p>
    <Link to="/login">
      <button className="btn-primary">Login</button>
    </Link>
    <Link to="/register">
      <button className="btn-secondary">Register</button>
    </Link>
  </div>
);
}

export default HomePage;