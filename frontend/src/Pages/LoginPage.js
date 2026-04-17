import React from 'react';
import '../App.css';

function LoginPage() {
  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <p className="text">Welcome back! Please login to continue.</p>

      <form className="login-form">
        <input
          type="email"
          placeholder="Email"
          className="input-field"
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field"
        />

        <button className="btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;