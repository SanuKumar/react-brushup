import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-header">
      <nav className="header">
        <NavLink
          activeClassName="active"
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
      </nav>
    </div>
  );
};

export default Header;
