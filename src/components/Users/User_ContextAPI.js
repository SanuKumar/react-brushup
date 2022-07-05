import React from "react";
import { UserData } from "../../App";

const User_ContextAPI = () => {
  return (
    <>
      <h3>Users List</h3>
      <UserData.Consumer>
        {(users) =>
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })
        }
      </UserData.Consumer>
    </>
  );
};

export default User_ContextAPI;
