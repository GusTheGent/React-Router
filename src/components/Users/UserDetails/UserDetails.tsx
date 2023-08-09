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
        <div className={styles.status}>
          <span>Active:</span>
          <span
            className={styles.dot}
            style={{ background: user?.active ? "green" : "red" }}
          ></span>
        </div>
        <img src={user?.details.image} alt="" className={styles["user-img"]} />
        <h3>
          {user?.name}{" "}
          <span className={styles["pro-name"]}>{user?.proName}</span>{" "}
          {user?.surname}
        </h3>
        <p>Age: {user?.details.age}</p>
        <p>Sport: {user?.details.sport}</p>
        <p>Country: {user?.details.country}</p>
      </div>
    </React.Fragment>
  );
};

export default UserDetails;
