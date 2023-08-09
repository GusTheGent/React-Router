import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { HomeProps } from "./types";
import Button from "components/Button/Button";

const Home: React.FunctionComponent<HomeProps> = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <section className="homepage">
        <header className="header">Fight Camp Tournament</header>
        <p className="subheader">Martial Arts Masters</p>
        <h1>Participate to the tournament</h1>
        <Button
          buttonText="Enroll"
          clickHandler={() => navigate("/participation-form")}
        />
      </section>
    </React.Fragment>
  );
};

export default Home;
