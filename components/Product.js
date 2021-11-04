import React from "react";
import Link from "next/link";
const Product = ({ product }) => {
  return (
    // <Link href={`/products/${product.id}`} passHref>
    <div
      style={{
        margin: "10px",
        border: "2px solid #000",
        padding: "5px",
        cursor: "pointer",
      }}
    >
      <Link href={`/products/${product.id}`} passHref>
        <div>
          <h1>Name: {product.title}</h1>
          <h3>Price: {product.price}</h3>
          <p>Desc: {product.description}</p>
        </div>
      </Link>
    </div>
    //
  );
};

export default Product;
