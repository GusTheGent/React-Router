import React from "react";
import { Outlet, Link, useSearchParams } from "react-router-dom";
import { UsersProps } from "./types";
import { users } from "data/users";
import Button from "components/Button/Button";

const Users: React.FunctionComponent<UsersProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActive = searchParams.get("filter") === "active";
  return (
    <React.Fragment>
      <h1>Athletes</h1>
      <div>
        <Button
          buttonText="Active Fighters"
          clickHandler={() => setSearchParams({ filter: "active" })}
        />
        <Button
          buttonText="Reset Filter"
          clickHandler={() => setSearchParams({})}
        />
      </div>
      {showActive
        ? users
            .filter((user) => user.active)
            .map((user) => (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>
                  {user.name} {user.proName} {user.surname}
                </Link>
              </li>
            ))
        : users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>
                {user.name} {user.proName} {user.surname}
              </Link>
            </li>
          ))}
      <Outlet />
    </React.Fragment>
  );
};

export default Users;
