import React from "react";
import { useDispatch } from "react-redux";
import { exitUser } from "../../redux/slice/userSlice";

import s from "./Header.module.css";
import { Exit } from "../../assets/SvgRet";

const Header = () => {
  const dispatch = useDispatch();

  const handlerExit = () => {
    dispatch(exitUser());
  };

  return (
    <div className={s.box}>
      <div className={s.header}>
        <h1 className={s.title}>Simple Hotel Check</h1>
        <button className={s.exitBtn} onClick={handlerExit}>
          Выйти <Exit />
        </button>
      </div>
    </div>
  );
};

export default Header;
