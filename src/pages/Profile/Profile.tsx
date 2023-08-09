import React from "react";
import { ProfileProps } from "./types";
import { useAuth } from "utils/Auth/Auth";
import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";

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
          <Button buttonText="Logout" clickHandler={handleLogout} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Profile;
