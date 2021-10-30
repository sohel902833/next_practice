import React from "react";
import Link from "next/link";
const Index = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
    </div>
  );
};

export default Index;
