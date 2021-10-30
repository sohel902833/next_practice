import React from "react";

import Link from "next/link";
const Users = ({ users }) => {
  return (
    <center>
      <Link href="/">
        <a>Home</a>
      </Link>
      {users.map((user) => (
        <div style={{ border: "1px solid #000", margin: "10px" }} key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
      <h1>List of users</h1>
    </center>
  );
};

export default Users;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
