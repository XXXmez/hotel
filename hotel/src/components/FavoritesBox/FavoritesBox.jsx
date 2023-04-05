import React from "react";
import { useSelector } from "react-redux";
import HotelInfo from "../HotelInfo/HotelInfo";
import WhiteBox from "../WhiteBox/WhiteBox";

import s from "./FavoritesBox.module.css";

const FavoritesBox = () => {
  const favoritesData = useSelector((state) => state.favorites);
  console.log(favoritesData);
  return (
    <WhiteBox>
      <div className={s.barContainer}>
        <h2 className={s.titleForeve}>Избранное</h2>
        <div className={s.selected}></div>
        <ul>
          {favoritesData.map((el) => (
            <div className={s.wrapper}>
              <HotelInfo
                hotelName={el.hotelName}
                stars={el.stars}
                price={el.price}
                hotelId={el.hotelId}
                data={el.startDate}
                day={el.countDay}
                like={true}
              />
            </div>
          ))}
        </ul>
      </div>
    </WhiteBox>
  );
};

export default FavoritesBox;
