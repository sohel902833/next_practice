import React from "react";
const SinglePost = ({ post }) => {
  return (
    <div>
      <h1>User Id : {post.userId}</h1>
      <h3>Title: {post.title}</h3>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
