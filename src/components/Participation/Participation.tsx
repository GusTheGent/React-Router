import React from "react";
import { useNavigate } from "react-router-dom";
import { ParticipationProps } from "./types";
import Form from "components/Form/Form";
const Participation: React.FunctionComponent<ParticipationProps> = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <h1>Signup for the tournament</h1>
      <button onClick={() => navigate(-1)}>Return</button>
      <Form />
    </React.Fragment>
  );
};

export default Participation;
