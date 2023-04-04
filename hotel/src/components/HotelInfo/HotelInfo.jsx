import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import StarRating from "../StarRating/StarRating";

import s from "./HotelInfo.module.css";

const HotelInfo = () => {
  return (
    <div className={s.info}>
      <div className={s.leftSide}>
        <p className={s.city}>Moscow Marriott Grand Hotel</p>
        <div className={s.rentalTime}>
          <p>7 июля 2020</p>
          <span className={s.trait}></span>
          <p>1 день</p>
        </div>
        <StarRating on={3} />
      </div>
      <div className={s.rightSide}>
        <div className={s.flexEnd}>
          <LikeButton />
        </div>
        <div className={s.price}>
          <p>23 924 ₽</p>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
