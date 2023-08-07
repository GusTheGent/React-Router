import React from "react";
import { LoginProps } from "./types";
import { AuthContextType, useAuth } from "utils/Auth/Auth";
import { useNavigate } from "react-router-dom";

const Login: React.FunctionComponent<LoginProps> = () => {
  const [user, setUser] = React.useState<AuthContextType>({
    username: "",
    login: () => {},
    logout: () => {},
  });
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate("/", { replace: true });
  };
  return (
    <React.Fragment>
      <h1>Login</h1>
      <label>
        User: {""}
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUser((previousState) => ({
              ...previousState,
              username: event.target.value,
            }))
          }
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </React.Fragment>
  );
};

export default Login;
