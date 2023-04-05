import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formateDate } from "../../functions";
import { addFavorite } from "../../redux/slice/favoritesSlice";
import LikeButton from "../LikeButton/LikeButton";
import StarRating from "../StarRating/StarRating";

import s from "./HotelInfo.module.css";

const HotelInfo = ({ hotelName, stars, price, hotelId, data, day, like }) => {
  const { selectDate, residenceTime } = useSelector((state) => state.settings);

  const currentStrDate = data || formateDate(selectDate);
  const countDay = day || residenceTime;

  const dispatch = useDispatch();
  const handlerFavorites = () => {
    const favorit = {
      hotelName,
      stars,
      price,
      startDate: currentStrDate,
      countDay: countDay,
      hotelId,
    };
    dispatch(addFavorite(favorit));
  };

  return (
    <div className={s.info}>
      <div className={s.leftSide}>
        <p className={s.city}>{hotelName}</p>
        <div className={s.rentalTime}>
          <p>{currentStrDate}</p>
          <span className={s.trait}></span>
          <p>{countDay} день</p>
        </div>
        <StarRating on={Number(stars)} />
      </div>
      <div className={s.rightSide}>
        <div className={s.flexEnd}>
          <LikeButton onClick={handlerFavorites} like={like} />
        </div>
        <div className={s.price}>
          <p>{price} ₽</p>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
