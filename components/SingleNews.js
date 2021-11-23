import React from "react";
import Link from "next/link";
const SingleNews = ({ news }) => {
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
      <Link href={`/news/${news.gender}`} passHref>
        <div>
          <h1>Title: {news.title}</h1>
          <h3>Gender: {news.gender}</h3>
          <p>Desc: {news.details}</p>
        </div>
      </Link>
    </div>
    //
  );
};

export default SingleNews;
