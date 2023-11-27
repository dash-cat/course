import React from "react";
import Post from "./Post";

const PostList = ({props}) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Post List</h1>
      {props.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
export default PostList;
