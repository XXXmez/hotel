import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import { setUser } from "./redux/slice/userSlice";

function App() {
  const dispacth = useDispatch();

  useEffect(() => {
    const auth = localStorage.getItem("isAuth");
    const login = localStorage.getItem("login");
    if (auth && login) {
      dispacth(
        setUser({
          isAuth: auth,
          login: login,
        })
      );
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
