import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  // const [isAuth, setIsAuth] = useState(true);

  const { isAuth } = useSelector((state) => state.user);

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
