import React from "react";
import Link from "next/link";
import Product from "../../components/Product";
const Products = ({ products }) => {
  return (
    <center>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <h1>Products Page</h1>

      {products.map((product) => (
        <Product product={product} />
      ))}
    </center>
  );
};

export default Products;
export async function getStaticProps() {
  console.log(`Generating/Regenerating ProductList`);
  const response = await fetch("http://localhost:4001/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
