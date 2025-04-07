import React from "react";
import { useState } from "react";
import "./WindowAction.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Sellwindow = ({ uid, price }) => {
  const [stockQuantity, setstockQuantity] = useState(1);
  const [stockPrice, setstockPrice] = useState(price || 1);

  const handelSellClick = () => {
    axios.post("http://localhost:3002/sellOrder", {
      name: uid,
      price: stockPrice,
      qty: stockQuantity,
      mode: "SELL",
    });
  };
  return (
    <>
      <div
        class="offcanvas offcanvas-bottom offcanvas-size"
        tabindex="-1"
        id="offcanvasBottomsell"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div class="offcanvas-header ">
          <h3>{uid} </h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body small">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              placeholder={stockQuantity}
              value={stockQuantity}
              onChange={(e) => {
                setstockQuantity(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              placeholder={stockPrice}
              value={stockPrice}
              onChange={(e) => {
                setstockPrice(e.target.value);
              }}
            />
          </fieldset>
        </div>
        <div className="buttons mb-5 text-center">
          <span className="mb-3">Margin required ₹140.65</span>
          <div>
            <Link
              className="btn btn-blue sell-btn-col"
              onClick={handelSellClick}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Sell
            </Link>
            <Link
              to=""
              className="btn btn-grey"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sellwindow;
