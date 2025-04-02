import React from "react";
function Hero() {
  return (
    <>
      <div className="conatiner">
        <div className="row">
          <div className="text-center mb-5" style={{ marginTop: "4rem" }}>
            <h1 className="mt-3">Zerodha Products</h1>
            <h6 className="fs-5 mt-3 " style={{ opacity: "0.8" }}>
              Sleek, modern, and intuitive trading platforms
            </h6>
            <p className="fs-6 mt-3">
              Check out our <a href="">investment offerings →</a>
            </p>
          </div>
          <hr className="mt-5 " style={{ opacity: 0.1 }} />
        </div>
      </div>
    </>
  );
}

export default Hero;
