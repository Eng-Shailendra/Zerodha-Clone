import React from "react";
function Umiverse() {
  return (
    <>
      <div className="container uni-conti">
        <div className="row uni-row-conti">
          <div className="text-center">
            <h1 className="fs-2 mb-4" style={{ opacity: "0.85" }}>
              The Zerodha Universe
            </h1>
            <p className="text-muted">
              Extend your trading and investment experience even further with
              our partner platforms
            </p>
          </div>
          {/* first collum */}
          <div className="col-4 p-2">
            <div className="uni-col">
              <img src="assets/Media/zerodhaFundhouse.png" alt="" />
              <p>
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
            <div className="uni-col">
              <img src="assets/Media/streakLogo.png" alt="" />
              <p>
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </div>
          </div>
          {/* Second Cullom */}
          <div className="col-4 p-2">
            <div className="uni-col">
              <img src="assets/Media/sensibullLogo.svg" alt="" />
              <p>
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </div>
            <div className="uni-col">
              <img src="assets/Media/smallcaseLogo.png" alt="" />
              <p>
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </div>
          </div>
          {/* Thired collum */}
          <div className="col-4 p-2">
            <div className="uni-col">
              <img src="assets/Media/tijori.svg" alt="" />
              <p>
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </p>
            </div>{" "}
            <div className="uni-col">
              <img src="assets/Media/ditto-logo.png" alt="" />
              <p>
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </div>
          </div>
          <button
            className="p-2 btn btn-primary fs-5 mt-3 mb-2"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Umiverse;
