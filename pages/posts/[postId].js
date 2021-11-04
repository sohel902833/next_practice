import React from "react";
import { useRouter } from "next/router";
const SinglePost = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading.....</h1>;
  }
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
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  // const data = await response.json();
  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });
  // return {
  //   paths: paths,
  //   fallback: false,
  // };
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
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  console.log(`Generating page for /posts/${params.postId}`);
  return {
    props: {
      post: data,
    },
  };
}
