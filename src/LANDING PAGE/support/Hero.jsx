import React from "react";
function Hero() {
  return (
    <>
      <div className="conatiner-fluid support-hero">
        <div className="container">
          <div className="hero-head-con">
            <h5>Support Portal</h5>
            <a href="">Track Ticket</a>
          </div>

          <div className="row ">
            <div className="col-6 p-5 head-col">
              <h4 className="fs-5 ">
                Search for an answer or browse help topics to create a ticket
              </h4>
              <input
                type="text"
                placeholder="Eg: how do i activate F&O, why order getting rejected"
                name=""
                id=""
              />
              <div className="hero-col-link">
                <a href=""> Track account opening </a>
                <a href=""> Track segment activation </a>
                <a href=""> Intraday margins</a>
                <a href=""> Kite user manual</a>
              </div>
            </div>

            <div className="col-6">
              <div className="col-6 p-5 head-col">
                <h4 className="fs-5 ">Featured</h4>

                <div className="hero-col-link">
                  <a
                    href=""
                    style={{
                      border: "none",
                      whiteSpace: "nowrap",
                      textDecoration: "underline",
                    }}
                  >
                    1. Trading holiday on account of Christmas on December 25,
                    2024{" "}
                  </a>
                  <a
                    href=""
                    style={{
                      border: "none",
                      whiteSpace: "nowrap",
                      textDecoration: "underline",
                    }}
                  >
                    2. Latest Intraday leverages and Square-off timings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
