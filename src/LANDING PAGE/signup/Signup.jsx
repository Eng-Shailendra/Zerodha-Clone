import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate(); // Use useNavigate for React Router v6
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/signup", {
        username,
        password,
        email,
      });

      if (response.status === 200) {
        navigate("/login");
        console.log(response.data);
      } else {
        console.log("signup failed", response);
      }
    } catch (error) {
      console.error("Error during signup:", error.response || error.message);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5 mt-5">
            <div className="mt-5 p-5 ">
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
            <form className="mt-5 p-5" onSubmit={handleFormSubmit}>
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="Email">Email </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                <button className="mt-3 sub-btn " type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" mb-5 text-center small container ">
          <p>
            I authorise Zerodha to contact me even if my number is registered on
            DND. I authorise Zerodha to fetch my KYC information from the C-KYC
            registry with my PAN.
            <br /> Please visit <a href="">this article</a> to know more.
          </p>
          <p>
            By submitting your contact details, you authorize Zerodha to contact
            you even if you are registered on DND & conduct online KYC for
            trading & demat account opening <br /> as per KRA regulations and
            PMLA guidelines.
          </p>
          <p>
            If you are looking to open a HUF, Corporate, Partnership, or NRI
            account, you have to use the <a href="">offline forms.</a> For help,{" "}
            <a href="">click here.</a>
          </p>
        </div>
      </div>
    </>
  );
}
export default Signup;
