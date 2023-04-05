import React from "react";
import { Heart } from "../../assets/SvgRet";
import s from "./LikeButton.module.css";

const LikeButton = ({ like, ...props }) => {
  return (
    <button {...props} className={s.btn}>
      <Heart like={like} />
    </button>
  );
};

export default LikeButton;
