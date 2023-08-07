import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "utils/Auth/Auth";

type RequireAuthProps = {
  children: React.ReactNode;
};

const RequireAuth: React.FunctionComponent<RequireAuthProps> = ({
  children,
}) => {
  const auth = useAuth();

  if (!auth.username) {
    return <Navigate to="/login" />;
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
};

export default RequireAuth;
