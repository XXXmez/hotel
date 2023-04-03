import React from "react";

import s from "./WhiteBox.module.css";

const WhiteBox = ({ children, ...other }) => {
  return (
    <div {...other} className={s.box}>
      {children}
    </div>
  );
};

export default WhiteBox;
