import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { HomeProps } from "./types";

const Home: React.FunctionComponent<HomeProps> = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <section className="homepage">
        <header className="header">Fight Camp Tournament</header>
        <p className="subheader">Martial Arts Masters</p>
        <h1>Participate to the tournament</h1>
        <button onClick={() => navigate("/participation-form")}>Enroll</button>
      </section>
    </React.Fragment>
  );
};

export default Home;
