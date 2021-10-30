import React from "react";
import Link from "next/link";
const Product = () => {
  return (
    <center>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/product/1/4">
        <a>Product 1</a>
      </Link>
      <Link href="/product/2/5">
        <a>Product 2</a>
      </Link>
      <Link href="/product/3/6">
        <a>Product 3</a>
      </Link>
    </center>
  );
};

export default Product;
