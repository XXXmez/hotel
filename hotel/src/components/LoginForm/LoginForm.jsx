import React from "react";
import { useState } from "react";

import Button from "../UI/Button/Button";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import Input from "../UI/Input/Input";

import s from "./LoginForm.module.css";

const LoginForm = () => {
  const [inputLogin, setInputLogin] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [errorCheckingLogin, setErrorCheckingLogin] = useState(false);
  const [errorCheckingPassword, setErrorCheckingPassword] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^[^\u0400-\u04FF]{8,}$/;

  const emailChecking = () => {
    return emailRegex.test(inputLogin);
  };
  const passwordChecking = () => {
    return passwordRegex.test(inputPassword);
  };

  const handlerButtonClick = () => {
    setErrorCheckingLogin(true);
    setErrorCheckingPassword(true);
    if (emailChecking() && passwordChecking()) {
      console.log("Запрос");

      setErrorCheckingLogin(false);
      setErrorCheckingPassword(false);
    }
  };

  return (
    <div className={s.box}>
      <div className={s.content}>
        <h2 className={s.title}>Simple Hotel Check</h2>
        <div className={s.inputs}>
          <div className={s.wrapperInput}>
            <Input
              title={"Логин"}
              value={inputLogin}
              onChange={setInputLogin}
            />
            {errorCheckingLogin && !inputLogin && (
              <ErrorMessage message="Пожалуйста введите почту" />
            )}
            {errorCheckingLogin && inputLogin && !emailChecking() && (
              <ErrorMessage message="Неверный формат почты" />
            )}
          </div>
          <div className={s.wrapperInput}>
            <Input
              title={"Пароль"}
              value={inputPassword}
              onChange={setInputPassword}
              type={"password"}
            />
            {errorCheckingPassword && !inputPassword && (
              <ErrorMessage message="Пожалуйста введите пароль" />
            )}
            {errorCheckingPassword && inputPassword && !passwordChecking() && (
              <ErrorMessage message="Некоректный пароль" />
            )}
          </div>
        </div>
        <Button onClick={handlerButtonClick}>Войти</Button>
      </div>
    </div>
  );
};

export default LoginForm;
