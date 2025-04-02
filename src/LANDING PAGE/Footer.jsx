import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <hr style={{ opacity: "0.1", marginBottom: "3rem" }} />
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="assets/Media/logo.svg"
              style={{ width: "50%" }}
              alt="logo"
            />

            <p className="footer-logo-text">
              © 2010 - 2024, Zerodha Broking Ltd.
            </p>
            <p className="footer-logo-text">All rights reserved.</p>
            <div className="mt-5 flex link-icon">
              <span>
                <i class="bi bi-twitter-x"></i>
              </span>
              <span>
                <i class="bi bi-facebook"></i>
              </span>
              <span>
                <i class="bi bi-whatsapp"></i>
              </span>
              <span>
                <i class="bi bi-instagram"></i>
              </span>
              <span>
                <i class="bi bi-youtube"></i>
              </span>
              <span>
                <i class="bi bi-linkedin"></i>
              </span>
            </div>
          </div>
          <div className="col list">
            <p className="list-head">Company</p>
            <a href="" className="list-item">
              About
            </a>

            <a href="" className="list-item">
              Products
            </a>

            <a href="" className="list-item">
              Pricing
            </a>

            <a href="" className="list-item">
              Referral programme
            </a>

            <a href="" className="list-item">
              Careers
            </a>

            <a href="" className="list-item">
              Zerodha.tech
            </a>

            <a href="" className="list-item">
              Press & media
            </a>

            <a href="" className="list-item">
              Zerodha Cares (CSR)
            </a>
          </div>
          <div className="col list">
            <p className="list-head">Support</p>
            <a href="#" className="list-item">
              {" "}
              Contact us
            </a>{" "}
            <a href="#" className="list-item">
              {" "}
              Support portal
            </a>{" "}
            <a href="#" className="list-item">
              {" "}
              Z-Connect blog
            </a>{" "}
            <a href="#" className="list-item">
              {" "}
              List of charges
            </a>{" "}
            <a href="#" className="list-item">
              {" "}
              Downloads & resources
            </a>{" "}
            <a href="#" className="list-item">
              {" "}
              Videos
            </a>{" "}
            <a href="#" className="list-item">
              {" "}
              Market overview
            </a>{" "}
            <a href="#" className="list-item">
              {" "}
              How to file a complaint?
            </a>{" "}
            <a href="#" className="list-item">
              {" "}
              Status of your complaints
            </a>{" "}
          </div>
          <div className="col list">
            <p className="list-head">Account</p>
            <a href="#" className="list-item">
              Open an account
            </a>

            <a href="#" className="list-item">
              {" "}
              Fund transfer
            </a>
          </div>
        </div>
        <div className=" footer-description mt-1  text-muted">
          <p className="mb-1 term-text">
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th
          </p>
          <p className="mb-1 term-text">
            Phase, Bengaluru - 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to
            <a href="#">complaints@zerodha.com</a>, for DP related to
            <a href="#">dp@zerodha.com</a>. Please ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p className="mb-1 term-text">
            Procedure to file a complaint on <a href="#">SEBI SCORES</a>:
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <a href="#" className="term-text">
            Smart Online Dispute Resolution
          </a>
          &nbsp;|
          <a href="#" className="term-text">
            {" "}
            Grievances Redressal Mechanism
          </a>
          <p className="term-text">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p className="term-text">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p className="term-text">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services,
            <a href="#"> please create a ticket here.</a>
          </p>
          <hr />
          <div className="footer-buttom">
            <span>NSE </span> <span>BSE </span> <span>MCX </span>
            <span>Terms & conditions </span>
            <span>Policies & procedures </span> <span>Privacy policy </span>
            <span>Disclosure </span> <span>For investor's attention </span>
            <span>Investor charter </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
