import React from "react";
import { Helmet } from "react-helmet-async";

const Home = (props) => {
  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <h3>Home</h3>
      <props.component />
    </>
  );
};

export default Home;
