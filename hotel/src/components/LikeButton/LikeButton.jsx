import React from "react";
import { Heart } from "../../assets/SvgRet";
import s from "./LikeButton.module.css";

const LikeButton = () => {
  return (
    <button className={s.btn}>
      <Heart />
    </button>
  );
};

export default LikeButton;
