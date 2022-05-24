import React, { useEffect, useState, useMemo, useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const array = ["1", "2", "3", "4", "5"];

  const memorizedArray = useMemo(() => {
    return array;
  }, []);

  useEffect(() => {
    fetchData("todos");
  }, []);

  const fetchData = (type) => {
    return fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((json) => setTodos(json));
  };

  const memorizeHandleClick = useCallback((key) => {
    console.log(key);
  }, []);

  return (
    <>
      <div>Parent</div>
      <div>No of Count = {count}</div>
      <button onClick={() => setCount(count + 1)}>Parent Button</button>
      <Child
        title="My Child"
        fetchData={todos}
        array={memorizedArray}
        handleClick={memorizeHandleClick}
      />
    </>
  );
};

export default Parent;
