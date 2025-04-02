import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import axios from "axios";

function Navbar() {
  const [currentUser, setcurrentUser] = [null];

  useEffect(() => {
    fetch("http://localhost:3002/id/home")
      .then((response) => {
        const username = xyz;
        setcurrentUser(username);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg  border-bottom"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container ">
          <Link className="navbar-brand" to="/">
            <img
              src="assets/Media/logo.svg"
              style={{ width: "30%" }}
              className=""
              alt="navbar logo "
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {!currentUser ? (
                <>
                  <li className="nav-item">
                    <Link className=" nav-link" aria-current="page" to="signup">
                      Signup
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className=" nav-link" aria-current="page" to="login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="logout">
                      logout
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="Support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <button className="nav-item nav-link">
            <i class="bi bi-list" style={{ fontSize: "30px" }}></i>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
