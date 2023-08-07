import React from "react";
import { AuthProps } from "./types";

export type AuthContextType = {
  username: string;
  login: (user: AuthContextType) => void;
  logout: () => void;
};

const initialUserState: AuthContextType = {
  username: "",
  login: () => {},
  logout: () => {},
};

export const AuthContext =
  React.createContext<AuthContextType>(initialUserState);

export const AuthProvider: React.FunctionComponent<AuthProps> = ({
  children,
}) => {
  const [user, setUser] = React.useState<AuthContextType>(initialUserState);

  const login = (user: AuthContextType) => {
    setUser(user);
  };

  const logout = () => {
    setUser(initialUserState);
  };

  return (
    <AuthContext.Provider value={{ ...user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
