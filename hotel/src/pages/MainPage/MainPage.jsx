import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import HotelSelection from "../../components/HotelSelection/HotelSelection";

import s from "./MainPage.module.css";

const MainPage = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={s.box}>
      <Header />
      <HotelSelection />
    </div>
  );
};

export default MainPage;
