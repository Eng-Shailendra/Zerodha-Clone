import { useState } from "react";
import React from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import {
  BarChartOutlined,
  Flag,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

// wathch list actions import
import Buywindow from "./window/BuyAction";
import Sellwindow from "./window/SellAction";
import { DonetChart } from "./DonetChat";

const WatchList = () => {
  return (
    <>
      <div className="watchlist-container">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search eg: nifty, bse nifrty 50 weekly, gold mcx"
            className="search"
          />
          <span className="counts"> {watchlist.length} / 50 </span>
        </div>
        <ul className="list">
          {watchlist.map((stock, index) => {
            return <WatchListItem stock={stock} key={index} />;
          })}
        </ul>

        <div className="container">
          <h1 className="title">Doughnut Graph </h1>
          <DonetChart item={watchlist} />
        </div>
      </div>
    </>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);
  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };
  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && (
        <WatchListActions uid={stock.name} price={stock.price} />
      )}
    </li>
  );
};

const WatchListActions = ({ uid, price }) => {
  return (
    <>
      <span className="actions">
        <span>
          <Tooltip
            title="Buy (B)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button
              id="buyBtn"
              className="buy"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            >
              Buy
            </button>
            <Buywindow uid={uid} price={price} />
          </Tooltip>
          <Tooltip
            title="sell (S)"
            // placement="Sell"
            arrow
            TransitionComponent={Grow}
          >
            <button
              type="button"
              id="sellBtn"
              className="sell"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottomsell"
              aria-controls="offcanvasBottom"
            >
              Sell
            </button>
            <Sellwindow uid={uid} price={price} />
          </Tooltip>
          <Tooltip
            title="Analytics (A)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button type="button" className="action">
              <BarChartOutlined className="icon" />
            </button>
          </Tooltip>
          <Tooltip
            title="More "
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="action">
              <MoreHoriz className="icon" />
            </button>
          </Tooltip>
        </span>
      </span>
    </>
  );
};

export { WatchListActions };
