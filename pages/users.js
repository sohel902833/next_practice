import React from "react";

import Link from "next/link";
import User from "../components/User";
const Users = ({ users }) => {
  return (
    <center>
      <Link href="/">
        <a>Home</a>
      </Link>
      {users.map((user) => (
        <User key={user.id} user={user} />
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
