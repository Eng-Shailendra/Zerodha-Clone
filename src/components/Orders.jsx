import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:3002/orders").then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <>
      <div className="orders">
        <div className="no-orders">
          {/* {if order is exist} */}
          {!orders || orders.length === 0 ? (
            <div className="no-orders">
              <p>You haven't placed any orders today</p>

              <Link to={"/"} className="btn btn-blue">
                Get started
              </Link>
            </div>
          ) : (
            <div className="container">
              <h3 className="title">Holdings ({orders.length})</h3>

              <div className="order-table">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Qty.</th>
                    <th>Price</th>
                    <th>Mode</th>
                  </tr>

                  {orders.map((stock) => {
                    // const curValue = stock.price * stock.qty;
                    // const isProfit = curValue - stock.avg * stock.qty >= 0.0;

                    // const profClass = isProfit ? "profit" : "loss";
                    console.log("stock.mode:", stock.mode.trim());
                    const ModeClass =
                      stock.mode.trim() === "SELL" ||
                      stock.mode.trim() === "BUY"
                        ? "loss"
                        : "profit";
                    console.log(ModeClass);
                    return (
                      <tr>
                        <td>{stock.name}</td>
                        <td>{stock.qty}</td>
                        <td>{stock.price}</td>
                        <td className={ModeClass}>{stock.mode}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Orders;
