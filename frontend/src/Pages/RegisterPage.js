import React from 'react';
import '../App.css';

function RegisterPage() {
  return (
    <div className="container">
      <h1 className="title">Create Account</h1>
      <p className="text">Join AI Study Assistant and start learning smarter.</p>

      <form className="login-form">
        <input
          type="text"
          placeholder="Full Name"
          className="input-field"
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          className="input-field"
        />

        <button className="btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;