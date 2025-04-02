import React from "react";
// import { Route, Router } from "react-router-dom";
function Hero() {
  return (
    <>
      <div className="container">
        <div className="text-center ">
          <h1 className="hero">Charges</h1>
          <h5 className="mt-1 p-2 text-muted">List of all charges and text</h5>
        </div>

        <div className="row p-5">
          <div className="col-4 p-5">
            <div className="text-center">
              <div>
                <img src="assets/Media/pricing-eq.svg" alt="" />
              </div>
              <h1 className="col-head">Free equity delivery</h1>
              <p className="fs-6 text-muted">
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>
          </div>

          <div className="col-4 p-5">
            <div className="text-center">
              <div>
                <img src="assets/Media/other-trades.svg" alt="" />
              </div>
              <h1 className="col-head">Intraday and F&O trades</h1>
              <p
                className=" fs-6 text-muted text-center"
                style={{ whiteSpace: "nowrap" }}
              >
                Flat ₹ 20 or 0.03% (whichever is lower) per <br />
                executed order on intraday trades across <br /> equity,
                currency, and commodity trades. <br /> Flat ₹20 on all option
                trades.
              </p>
            </div>
          </div>

          <div className="col-4 p-5">
            <div className="text-center">
              <div>
                <img src="assets/Media/pricing-eq.svg" alt="" />
              </div>
              <h1 className="col-head">Free direct MF</h1>
              <p className="text-muted fs-6 mt-3">
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
        <div className="info-link  border-bottom">
          <a href="">
            <h1>EQUITY</h1>
          </a>
          <a href="">
            <h1>Currency</h1>
          </a>
          <a href="">
            <h1>Commodity</h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
