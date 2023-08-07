import React from "react";
import { UserDetailsProps } from "./types";
import { useParams } from "react-router-dom";
import { users } from "data/users";
import styles from "./UserDetails.module.css";

const UserDetails: React.FunctionComponent<UserDetailsProps> = () => {
  const { userId } = useParams();
  const user = users.find((user) => user.id === Number(userId));
  return (
    <React.Fragment>
      <div className={styles.container}>
        <img src={user?.image} alt="" className={styles["user-img"]} />
        <h3>
          {user?.name}{" "}
          <span className={styles["pro-name"]}>{user?.proName}</span>{" "}
          {user?.surname}
        </h3>
        <p>Age: {user?.age}</p>
        <p>Sport: {user?.sport}</p>
        <p>Country: {user?.country}</p>
      </div>
    </React.Fragment>
  );
};

export default UserDetails;
