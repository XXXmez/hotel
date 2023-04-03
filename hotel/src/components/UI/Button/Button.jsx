import React from "react";

import s from "./Button.module.css";

const Button = ({ children, ...a }) => {
  return (
    <button {...a} className={s.btn}>
      {children}
    </button>
  );
};

export default Button;
