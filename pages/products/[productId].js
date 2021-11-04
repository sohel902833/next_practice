import React from "react";
import { useRouter } from "next/router";
const SingleProduct = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #000",
        borderRadius: "10px",
        padding: "10px",
        flexDirection: "column",
      }}
    >
      <h1>Name: {product.title}</h1>
      <h3>Price: {product.price}</h3>
      <p>Desc: {product.description}</p>
    </div>
  );
};

export default SingleProduct;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  console.log("Regenerating Product " + params.productId);
  const response = await fetch(
    `http://localhost:4001/products/${params.productId}`
  );
  const data = await response.json();
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
