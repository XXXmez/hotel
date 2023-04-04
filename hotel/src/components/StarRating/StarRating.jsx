import React from "react";
import { Star } from "../../assets/SvgRet";

import s from "./StarRating.module.css";

const StarRating = ({ on = 0 }) => {
  const trueArray = Array.from({ length: on }, () => true);
  const falseArray = Array.from({ length: 5 - on }, () => false);

  return (
    <div className={s.rating}>
      {[...trueArray, ...falseArray].map((el, ind) => (
        <Star key={ind} gold={el} />
      ))}
    </div>
  );
};

export default StarRating;
