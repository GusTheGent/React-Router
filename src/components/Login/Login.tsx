import React from "react";
import { LoginProps } from "./types";
import { AuthContextType, useAuth } from "utils/Auth/Auth";
import { useNavigate } from "react-router-dom";
import Form from "components/Form/Form";
import { fieldValues } from "./helper";

const Login: React.FunctionComponent<LoginProps> = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = (data: Record<string, any>) => {
    auth.login(data as AuthContextType);
    navigate("/", { replace: true });
  };
  return (
    <React.Fragment>
      <h1>Login</h1>
      <Form fieldValues={fieldValues} formSubmission={handleLogin} />
    </React.Fragment>
  );
};

export default Login;
