import React from "react";

import s from "./Button.module.css";

const Button = ({ children, ...other }) => {
  return (
    <button {...other} className={s.btn}>
      {children}
    </button>
  );
};

export default Button;
