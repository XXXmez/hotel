import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import { getUsers } from "./redux/slice/userSlice";

function App() {
  const dispacth = useDispatch();
  const { isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    const auth = localStorage.getItem("isAuth");
    const login = localStorage.getItem("login");
    if (auth && login) {
      dispacth(
        getUsers({
          isAuth: auth,
          login: login,
        })
      );
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isAuth ? <MainPage /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
