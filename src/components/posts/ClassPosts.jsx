import React, { Component } from "react";
import { Posts } from "./Posts";

export class ClassPosts extends Component {
  state = {
    posts: [
      { id: "abc1", name: "JS Basics" },
      { id: "abc2", name: "JS Advanced" },
      { id: "abc3", name: "React JS" },
    ],
  };

  removePost = (id) => {
    this.setState({ posts: this.state.posts.filter((post) => post.id !== id) });
  };

  render() {
    const { posts } = this.state;

    return (
      <div style={PropsStyle}>
        <div style={ContainerStyle}>
          <Posts onHandleClick={this.removePost} posts={posts} />
        </div>
      </div>
    );
  }
}

const PropsStyle = {
  display: "flex",
  borderBottom: "1px solid black",
};

const ContainerStyle = {
  padding: "10px",
  textAlign: "center",
  margin: "0 auto",
};
