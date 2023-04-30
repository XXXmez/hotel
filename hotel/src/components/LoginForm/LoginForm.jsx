import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slice/userSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Button from "../UI/Button/Button";
// import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import Input from "../UI/Input/Input";

import s from "./LoginForm.module.css";
import btnStyle from "../UI/Button/Button.module.css";

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
  const passwordChecking = (password) => {
    return passwordRegex.test(password);
  };

  const dispatch = useDispatch();

  const handlerSubmit = (event) => {
    event.preventDefault();

    setErrorCheckingLogin(true);
    setErrorCheckingPassword(true);
    if (emailChecking() && passwordChecking(inputPassword)) {
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
                !passwordChecking(inputPassword) && (
                  <ErrorMessage message="Некоректный пароль" />
                )}
            </div>
          </div>
          <Button type="submit">Войти</Button>
        </form> */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required-Пожалуйста введите почту";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address-Неверный формат почты";
            }

            if (!values.password) {
              errors.password = "Required-Введите пароль";
            } else if (!passwordRegex.test(values.password)) {
              let message = "Неверный формат пароля";
              if (values.password.length < 8) {
                message += "Пароль должен быть не меньше 8 символов";
              }
              errors.password = message;
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <>
              <Form>
                <div className={s.inputs}>
                  <div className={s.wrapperInput}>
                    <Field type="email" name="email" />
                    {/* <ErrorMessage name="email" component="div" /> */}
                  </div>
                  <div className={s.wrapperInput}>
                    <Field type="password" name="password" />
                    {/* <ErrorMessage name="password" component="div" /> */}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={btnStyle.btn}
                >
                  Войти
                </button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
