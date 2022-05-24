import React, { useEffect, useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PhotoAlbum from "./components/PhotoAlbum/PhotoAlbum";
import Header from "./components/Header/Header";
import User from "./components/Users/User_ContextAPI";
import ParentMemo from "./components/Memo/Parent";
import { HOC, HOCRed, HOCGreen } from "./components/HOC";
import ErrorBoundary from "./components/ErrorBoundry";
import "./App.css";

const UserData = createContext();

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => res);
    setUsers(data);
  };
  return (
    <ErrorBoundary>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home component={HOC} />} />
        <Route exact path="/photos" element={<PhotoAlbum />} />
        <Route
          exact
          path="/user"
          element={
            <UserData.Provider value={users}>
              <User />
            </UserData.Provider>
          }
        />
        <Route exact path="/memo" element={<ParentMemo />} />
        <Route
          exact
          path="/hoc"
          element={
            <>
              <HOCRed component={HOC} />
              <HOCGreen component={HOC} />
            </>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
};

export { UserData };

export default App;
