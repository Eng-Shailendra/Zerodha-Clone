import React from "react";
import { useState } from "react";
import "./WindowAction.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Buywindow = ({ uid, price }) => {
  const [stockQuantity, setstockQuantity] = useState(1);
  const [stockPrice, setstockPrice] = useState(price || 1);

  const handelBuyClick = () => {
    axios.post("http://localhost:3002/buyOrder", {
      name: uid,
      price: stockPrice,
      qty: stockQuantity,
      mode: "BUY",
    });
  };

  return (
    <>
      <div
        class="offcanvas offcanvas-bottom offcanvas-size"
        tabindex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div class="offcanvas-header">
          <h3>{uid}</h3>
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
              onChange={(e) => {
                setstockQuantity(e.target.value);
                value = { stockQuantity };
              }}
              placeholder={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => {
                setstockPrice(e.target.value);
              }}
              value={stockPrice}
              placeholder={stockPrice}
            />
          </fieldset>
        </div>
        <div className="buttons mb-5 text-center">
          <span className="mb-3">Margin required ₹140.65</span>
          <div>
            <Link
              className="btn btn-blue"
              onClick={handelBuyClick}
              aria-label="Close"
              data-bs-dismiss="offcanvas"
            >
              Buy
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

export default Buywindow;
