import React from "react";
function CreateTicket() {
  return (
    <>
      <div className="container ">
        <div className="head mt-5 mb-4">
          <h1 className="fs-5  text-muted">
            To create a ticket, select a relevant topic
          </h1>
        </div>
        <div className="row ">
          <div className="col-4 ">
            <div>
              <h5 className="fs-6">
                <i class="bi bi-plus-circle"></i> Account Opening
              </h5>
            </div>
            <div className="p-3 support-link">
              <a href=""> Getting started</a>
              <br />
              <a href=""> Online</a>
              <br />
              <a href=""> Offline</a>
              <br />
              <a href=""> Charges</a>
              <br />
              <a href=""> Company, Partnership and HUF</a>
              <br />
              <a href=""> Non Resident Indian (NRI) </a>
              <br />
            </div>
          </div>
          <div className="col-4 ">
            <div>
              <h5 className="fs-6">
                <i class="bi bi-person"></i> Your Zerodha Account
              </h5>
            </div>
            <div className="p-3 support-link">
              <a href=""> Login credentials</a>
              <br />
              <a href=""> Your Profile</a>
              <br />
              <a href=""> Account modification and segment addition</a>
              <br />
              <a href=""> CMR & DP ID</a>
              <br />
              <a href=""> Nomination</a>
              <br />
              <a href=""> Transfer and conversion of shares</a>
              <br />
            </div>
          </div>
          <div className="col-4 ">
            <div className="">
              <h5 className="fs-6">
                <i class="bi bi-bank2"></i> Trading and Markets
              </h5>
            </div>
            <div className="p-3 support-link ">
              <a href=""> Trading FAQs</a>
              <br />
              <a href=""> Kite</a>
              <br />
              <a href=""> Margins</a>
              <br />
              <a href=""> Product and order types</a>
              <br />
              <a href=""> Corporate actions</a>
              <br />
              <a href=""> Kite features</a>
              <br />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-4 ">
            <div>
              <h5 className="fs-6">
                <i class="bi bi-wallet"></i> &nbsp;Funds
              </h5>
            </div>
            <div className="p-3 support-link">
              <a href=""> Fund withdrawal</a>
              <br />
              <a href=""> Adding funds</a>
              <br />
              <a href=""> Adding bank accounts</a>
              <br />
              <a href=""> eMandates</a>
              <br />
            </div>
          </div>
          <div className="col-4 ">
            <div>
              <h5 className="fs-6">
                <i class="bi bi-c-circle"></i> Console
              </h5>
            </div>
            <div className="p-3 support-link">
              <a href=""> IPO</a>
              <br />
              <a href=""> Portfolio</a>
              <br />
              <a href=""> Funds statement</a>
              <br />
              <a href="">Profile</a>
              <br />
              <a href=""> Reports</a>
              <br />
              <a href=""> Referral program</a>
              <br />
            </div>
          </div>
          <div className="col-4 ">
            <div className="">
              <h5 className="fs-6">
                <i class="bi bi-cash-coin"></i> Coin
              </h5>
            </div>
            <div className="p-3 support-link ">
              <a href=""> Understanding mutual funds and Coin</a>
              <br />
              <a href=""> Coin app</a>
              <br />
              <a href=""> Coin web</a>
              <br />
              <a href=""> Transactions and reports</a>
              <br />
              <a href=""> National Pension Scheme (NPS)</a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTicket;
