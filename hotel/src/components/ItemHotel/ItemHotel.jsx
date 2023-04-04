import React from "react";
import HotelInfo from "../HotelInfo/HotelInfo";
import HouseCircle from "../HouseCircle/HouseCircle";

import s from "./ItemHotel.module.css";

const ItemHotel = () => {
  return (
    <li className={s.item}>
      <HouseCircle />
      <HotelInfo />
    </li>
  );
};

export default ItemHotel;
