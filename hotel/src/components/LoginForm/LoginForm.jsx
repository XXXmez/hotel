import React from "react";
import { useState } from "react";
import Button from "../UI/Button/Button";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import Input from "../UI/Input/Input";

import s from "./LoginForm.module.css";

const LoginForm = () => {
  const [inputLogin, setInputLogin] = useState();
  const [inputPassword, setInputPassword] = useState();
  const [errorChecking, setErrorChecking] = useState(false);

  const handlerButtonClick = () => {
    console.log(inputLogin, inputPassword);
    setErrorChecking(true);
  };

  return (
    <div className={s.box}>
      <div className={s.content}>
        <h2 className={s.title}>Simple Hotel Check</h2>
        <div className={s.inputs}>
          <div>
            <Input
              title={"Логин"}
              value={inputLogin}
              onChange={setInputLogin}
            />
            {errorChecking && <ErrorMessage message="Неверный формат почты" />}
          </div>
          <div>
            <Input
              title={"Пароль"}
              value={inputPassword}
              onChange={setInputPassword}
              type={"password"}
            />
            {errorChecking && <ErrorMessage message="Неверный формат почты" />}
          </div>
        </div>
        <Button onClick={handlerButtonClick}>Войти</Button>
      </div>
    </div>
  );
};

export default LoginForm;
