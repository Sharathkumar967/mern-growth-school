import React, { useState } from "react";
import "./Register.scss";
import { handleRegister } from "../../services/authService";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  const { userName, email, password } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleRegister(e, userName, email, password);

    console.log("Submitted Data:");
    console.log("Username:", userName);
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear the form after submission
    setFormData({
      userName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="signUp-form">
      <section className="form animated flipInX">
        <h2>Sign Up Your Account</h2>
        {isValid && <p className="valid">Registration successful.</p>}
        {error && <p className="error">{error}</p>}
        <form className="loginbox" autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={handleInputChange}
            placeholder="Username"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Password"
            required
          />

          <button type="submit" id="submit">
            Register
          </button>
        </form>

        <p>
          Already registered? <Link to="/login">Login here</Link>
        </p>
      </section>
    </div>
  );
};

export default Register;
