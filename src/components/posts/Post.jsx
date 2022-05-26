import React from "react";

export function Post(props) {
  const { name, onHandleClick } = props;
  return (
    <h2>
      {name} <button onClick={onHandleClick}>delete</button>
    </h2>
  );
}
