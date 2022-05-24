import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <p>
        <Link to={"/"}>Home</Link>|
      </p>
      <p>
        <Link to={"/photos"}>PhotoAlbu-Axios</Link>|
      </p>
      <p>
        <Link to="/user">Users-ContextAPI</Link>|
      </p>
      <p>
        <Link to="/memo">React Memo and Callback</Link>|
      </p>
      <p>
        <Link to="/hoc">HOC</Link>|
      </p>
      <p>
        <Link to="/useReducer">Use Reducer</Link>|
      </p>
    </nav>
  );
};

export default Header;
