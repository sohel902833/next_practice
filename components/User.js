import React from "react";

const User = ({ user }) => {
  return (
    <div style={{ border: "1px solid #000", margin: "10px" }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
