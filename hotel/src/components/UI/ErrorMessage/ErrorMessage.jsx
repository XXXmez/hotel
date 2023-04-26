import React from "react";

import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message = "", ...other }) => {
  return (
    <span {...other} className={s.errorMessage}>
      {message}
    </span>
  );
};

export default ErrorMessage;
