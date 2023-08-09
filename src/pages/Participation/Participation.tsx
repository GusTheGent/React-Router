import React from "react";
import { useNavigate } from "react-router-dom";
import { ParticipationProps } from "./types";
import { participationFields } from "./helper";
import Form from "components/Form/Form";
import { User } from "models/User.interface";
import { users } from "data/users";
import Button from "components/Button/Button";
const Participation: React.FunctionComponent<ParticipationProps> = () => {
  const navigate = useNavigate();
  const handleSubmission = (data: Record<string, any>) => {
    const newUser = { ...data, id: users.length + 1, active: true };
    users.push(newUser as User);
    navigate("/users");
  };
  return (
    <React.Fragment>
      <h1>Signup for the tournament</h1>
      <Button buttonText="Return" clickHandler={() => navigate(-1)} />
      <Form
        fieldValues={participationFields}
        formSubmission={handleSubmission}
      />
    </React.Fragment>
  );
};

export default Participation;
