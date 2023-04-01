import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const isAuth = false;

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
