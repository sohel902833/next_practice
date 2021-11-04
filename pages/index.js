import React from "react";
import Link from "next/link";
const Index = () => {
  return (
    <center>
      <Link href="/users">
        <a>Users</a>
      </Link>{" "}
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <h1>Hello</h1>
    </center>
  );
};

export default Index;
