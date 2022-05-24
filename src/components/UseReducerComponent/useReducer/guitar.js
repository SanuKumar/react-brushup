import React, { useState } from "react";

const Guitar = () => {
  const [numGuitar, setNumGuitar] = useState(1);
  const [showEmoji, toggleShowEmoji] = useState(false);

  return (
    <>
      <h1>{"🔥".repeat(numGuitar)}</h1>
      <button
        onClick={() => {
          toggleShowEmoji(true);
          setNumGuitar(numGuitar + 1);
        }}
      >
        Add Guitar
      </button>
      <button
        onClick={() => {
          toggleShowEmoji(false);
          setNumGuitar(numGuitar - 1);
        }}
      >
        Remove Guitar
      </button>
      <button
        onClick={() => {
          toggleShowEmoji(false);
          setNumGuitar(1);
        }}
      >
        Reset
      </button>
      {showEmoji && <h2>😃</h2>}
    </>
  );
};

export default Guitar;
