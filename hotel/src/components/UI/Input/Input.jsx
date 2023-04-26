import React from "react";
import { useState } from "react";

import s from "./Input.module.css";

const Input = ({ title, value = "", onChange, type = "" }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (targetValue) => {
    let newInputValue = targetValue;
    if (typeof Number(newInputValue) === "number" && type === "number") {
      if (newInputValue < 1) newInputValue = 1;
    }
    setInputValue(newInputValue);

    if (onChange) {
      onChange(newInputValue);
    }
  };

  return (
    <div className={s.boxInput}>
      <p className={s.title}>{title}</p>
      <input
        type={type}
        className={s.input}
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
