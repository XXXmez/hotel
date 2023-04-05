import React from "react";
import { useSelector } from "react-redux";
import HotelInfo from "../HotelInfo/HotelInfo";
import HouseCircle from "../HouseCircle/HouseCircle";

import s from "./ItemHotel.module.css";

const ItemHotel = ({ hotelName, stars, price, hotelId }) => {
  const favoritesData = useSelector((state) => state.favorites);

  const like = favoritesData.some((el) => el.hotelId === hotelId);

  return (
    <li className={s.item}>
      <HouseCircle />
      <HotelInfo
        hotelName={hotelName}
        stars={stars}
        price={price}
        hotelId={hotelId}
        like={like}
      />
    </li>
  );
};

export default ItemHotel;
