import React from "react";
import { Post } from "./Post";

export function Posts(props) {
  const { posts, onHandleClick } = props;

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            onHandleClick={() => onHandleClick(post.id)}
            key={post.id}
            name={post.name}
          />
        ))
      ) : (
        <h2>Sorry no items...</h2>
      )}
    </div>
  );
}
