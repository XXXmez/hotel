import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slice/userSlice";
import { Formik } from "formik";

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

  const dispatch = useDispatch();

  const handlerSubmit = (event) => {
    event.preventDefault();

    setErrorCheckingLogin(true);
    setErrorCheckingPassword(true);
    if (emailChecking() && passwordChecking()) {
      console.log("авторизация");
      dispatch(
        setUser({
          isAuth: true,
          login: inputLogin,
        })
      );
      localStorage.setItem("isAuth", true);
      localStorage.setItem("login", inputLogin);

      setErrorCheckingLogin(false);
      setErrorCheckingPassword(false);
    }
  };

  return (
    <div className={s.box}>
      <div className={s.content}>
        <h2 className={s.title}>Simple Hotel Check</h2>
        {/* <form onSubmit={handlerSubmit}>
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
              {errorCheckingPassword &&
                inputPassword &&
                !passwordChecking() && (
                  <ErrorMessage message="Некоректный пароль" />
                )}
            </div>
          </div>
          <Button type="submit">Войти</Button>
        </form> */}
        <Formik initialValues={{ email: "", password: "" }}>
          {({ values, errors, isSubmitting }) => (
            <form>
              <input
                type="email"
                name="email"
                // onChange={handleChange}
                // onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                // onChange={handleChange}
                // onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
