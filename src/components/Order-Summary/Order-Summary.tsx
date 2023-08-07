import React from "react";
import { useNavigate } from "react-router-dom";
const OrderSummary: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <h1>Order placed successfully!</h1>
      <button onClick={() => navigate(-1)}>Return</button>
    </React.Fragment>
  );
};

export default OrderSummary;
