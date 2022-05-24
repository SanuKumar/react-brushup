import React, { useState } from "react";

export const HOC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

export function HOCRed(props) {
  console.log(props);
  return (
    <h2 style={{ backgroundColor: "red", width: 100, textAlign: "center" }}>
      <props.component />
    </h2>
  );
}

export function HOCGreen(props) {
  return (
    <h2 style={{ backgroundColor: "green", width: 100, textAlign: "center" }}>
      <props.component />
    </h2>
  );
}
