import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    <div>Please Login</div>;
  } else {
    <div>Welcome {user.username}</div>;
  }
};
export default Profile;
