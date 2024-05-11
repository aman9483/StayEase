import React from "react";
import "./sucess.css";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <span className="tickIcon">✓</span>
      <p>Your Room has been Booked successfully</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default OrderSuccess;
