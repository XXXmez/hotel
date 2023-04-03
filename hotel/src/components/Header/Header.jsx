import React from "react";

import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.box}>
      <div className={s.header}>
        <h1 className={s.title}>Simple Hotel Check</h1>
        <button>Выйти</button>
      </div>
    </div>
  );
};

export default Header;
