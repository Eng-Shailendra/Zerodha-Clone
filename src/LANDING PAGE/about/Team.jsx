import React from "react";

function Team() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div>
            <h1 className="fs-2 text-center">People</h1>
          </div>
          <div className="col mt-5">
            <div className="DP">
              <img
                className="DP-image"
                src="assets/Media/nithinKamath - Copy.jpg"
                alt="Founder image"
              />
              <h4 className=" fs-1 mt-4">Nithin Kamath</h4>
              <p className="">Founder, CEO</p>
            </div>
          </div>
          <div className="col mt-5 p-5 fs-6 text-muted">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
              <a href="">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
