import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ loggeMe }) => {
  const [log, setLog] = useState(false);

  useEffect(() => {}, [log]);

  const handleSwitch = () => {
    if (log) {
      loggeMe(true);
      setLog(false);
    } else {
      loggeMe(false);
      setLog(true);
    }
  };

  return (
    <div className="main-header">
      <nav className="header">
        <NavLink
          activeclassname="active"
          className="main-header__item"
          to={"/"}
        >
          <span>Home</span>
        </NavLink>
        <NavLink className="main-header__item" to={"/photos"}>
          <span>PhotoAlbu-Axios</span>
        </NavLink>
        <NavLink className="main-header__item" to="/user">
          <span>Users-ContextAPI</span>
        </NavLink>
        <NavLink className="main-header__item" to="/memo">
          <span>React Memo and Callback</span>
        </NavLink>
        <NavLink className="main-header__item" to="/hoc">
          <span>HOC</span>
        </NavLink>
        <NavLink className="main-header__item" to="/useReducer">
          <span>Use Reducer</span>
        </NavLink>
        <button onClick={handleSwitch}>{log ? "Switch" : "Switch Back"}</button>
      </nav>
    </div>
  );
};

export default Header;
