import React from "react";
import { ProfileProps } from "./types";
import { useAuth } from "utils/Auth/Auth";
import { useNavigate } from "react-router-dom";

const Profile: React.FunctionComponent<ProfileProps> = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <React.Fragment>
      <h1>Profile Page</h1>
      {auth.username && (
        <div>
          <h1>Hello {auth.username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Profile;
