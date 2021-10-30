import React from "react";

import Link from "next/link";
const Post = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`} passHref>
      <div style={{ border: "1px solid #000", margin: "10px" }}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </Link>
  );
};

export default Post;
