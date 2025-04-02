import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); // Use useNavigate for React Router v6
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Send login request to backend
      const response = await axios.post("http://localhost:3002/login", {
        username,
        password,
      });

      // If login is successful, navigate to the home page
      if (response.status === 200) {
        navigate("/home"); // Navigate to /home after successful login
      } else {
        // Handle failed login (e.g., show an error message)
        console.log("Login failed", response);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5 mt-5">
          <div className="mt-5 p-5">
            <img
              src="assets/Media/signup.png"
              width={600}
              height={350}
              alt=""
            />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5 mt-5 p-5">
          <form onSubmit={handleFormSubmit} className="mt-5 p-5">
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="mt-2"></div>
            <div>
              <button className="mt-3 sub-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
