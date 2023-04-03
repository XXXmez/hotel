import React from "react";

import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message = "" }) => {
  return <span className={s.errorMessage}>{message}</span>;
};

export default ErrorMessage;
