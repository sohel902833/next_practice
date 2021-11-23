import React from "react";
import { useRouter } from "next/router";
import SingleNews from "../../components/SingleNews";
const GenderNews = ({ category, gender }) => {
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
      <h1>{gender}</h1>
      {category.map((n) => (
        <SingleNews news={n} />
      ))}
    </div>
  );
};

export default GenderNews;

export async function getServerSideProps(context) {
  const { params } = context;
  const { gender } = params;
  const response = await fetch(`http://localhost:4001/news?gender=${gender}`);
  const data = await response.json();
  return {
    props: {
      category: data,
      gender,
    },
  };
}
