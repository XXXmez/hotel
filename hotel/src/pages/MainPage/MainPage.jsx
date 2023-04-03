import React from "react";
import Header from "../../components/Header/Header";
import HotelSelection from "../../components/HotelSelection/HotelSelection";

import s from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={s.box}>
      <Header />
      <HotelSelection />
    </div>
  );
};

export default MainPage;
