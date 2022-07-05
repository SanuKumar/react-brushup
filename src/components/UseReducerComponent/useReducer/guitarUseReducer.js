import React, { useReducer } from "react";
import reducer from "./reducer";

function GuitarUseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    numGuitar: 1,
    showEmoji: false,
  });
  return (
    <>
      <div>"Use Reducer"</div>
      <h1>{"🔥".repeat(state.numGuitar)}</h1>
      <button onClick={() => dispatch({ type: "ADD_GUITAR" })}>
        Add Guitar
      </button>
      <button onClick={() => dispatch({ type: "REMOVE_GUITAR" })}>
        Remove Guitar
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      {state.showEmoji && <h2>😃</h2>}
    </>
  );
}

export default GuitarUseReducer;
