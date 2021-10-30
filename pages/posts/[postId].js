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
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();
  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths: paths,
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
