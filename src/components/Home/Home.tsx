import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <section className="homepage">
        <header className="header">Snopes!</header>
        <p className="subheader">Gaming Masters</p>
        <h1>Place your order today!</h1>
        <button onClick={() => navigate("/order-summary")}>Place order</button>
      </section>
    </React.Fragment>
  );
};

export default Home;
