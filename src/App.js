import React, { useEffect, useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PhotoAlbum from "./components/PhotoAlbum/PhotoAlbum";
import Header from "./components/Header/Header";
import User from "./components/Users/User_ContextAPI";
import ParentMemo from "./components/Memo_Callback/Parent";
import { HOC, HOCRed, HOCGreen } from "./components/HOC";
import ErrorBoundary from "./components/ErrorBoundry";
import UseReducerComponent from "./components/UseReducerComponent";
import Helmet, { HelmetProvider } from "react-helmet-async";
import "./App.css";

const UserData = createContext();

const Sanu = () => {
  return (
    <div>
      <li>Name</li>
      <li>Date</li>
    </div>
  );
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [logged, setLogged] = useState(false);

  const loggeMe = (key) => {
    setLogged(key);
  };

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
      <HelmetProvider>
        <Header loggeMe={loggeMe} />
        {logged ? (
          <>
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
              <Route
                exact
                path="/useReducer"
                element={<UseReducerComponent />}
              />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route exact path="/" element={<Sanu />} />
            </Routes>
          </>
        )}
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export { UserData };

export default App;
