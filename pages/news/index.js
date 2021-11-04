import React from "react";
import SingleNews from "../../components/SingleNews";

const News = ({ news }) => {
  return (
    <center>
      <h1>News Page</h1>
      {news.map((n) => (
        <SingleNews news={n} />
      ))}
    </center>
  );
};

export default News;
export async function getServerSideProps() {
  const response = await fetch("http://localhost:4001/news");
  const data = await response.json();
  return {
    props: {
      news: data,
    },
  };
}
