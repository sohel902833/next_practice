import React from "react";
import Post from "../../components/Post";
import Link from "next/link";
const Posts = ({ posts }) => {
  return (
    <center>
      <Link href="/">
        <a>Home</a>
      </Link>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <h1>List of users</h1>
    </center>
  );
};

export default Posts;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
