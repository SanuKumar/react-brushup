import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

export const HOC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Helmet>
        <title>HOC</title>
      </Helmet>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

export function HOCRed(props) {
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
