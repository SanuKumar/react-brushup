import React, { useRef, useReducer } from "react";

const UseReducerComponent = () => {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name,
          },
        ];
      default:
        return state;
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  }

  return (
    <>
      <div>UseReducer - Example</div>

      <div>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} />
        </form>
        <ul>
          {items.map((item, index) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UseReducerComponent;
