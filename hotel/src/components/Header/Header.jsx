import React from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/slice/userSlice";

import s from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const handlerExit = () => {
    dispatch(
      getUsers({
        isAuth: false,
        login: "",
      })
    );
    localStorage.setItem("isAuth", false);
    localStorage.setItem("login", "");
  };

  return (
    <div className={s.box}>
      <div className={s.header}>
        <h1 className={s.title}>Simple Hotel Check</h1>
        <button onClick={handlerExit}>Выйти</button>
      </div>
    </div>
  );
};

export default Header;
