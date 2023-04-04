import React from "react";
import { House } from "../../assets/SvgRet";

import s from "./HouseCircle.module.css";

const HouseCircle = () => {
  return (
    <div className={s.circle}>
      <House />
    </div>
  );
};

export default HouseCircle;
