import React from "react";

const Home = (props) => {
  return (
    <>
      <h3>Home</h3>
      <props.component />
    </>
  );
};

export default Home;
