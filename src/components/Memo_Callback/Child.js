import React, { memo } from "react";

const Child = (props) => {
  console.log("Re render Child", props);
  return (
    <>
      <h2>{props.title}</h2>
      {props.array.map((a, i) => (
        <li key={i}>{a}</li>
      ))}
      <button onClick={() => props.handleClick("todos")}>Click Parent</button>
    </>
  );
};

export default memo(Child);
