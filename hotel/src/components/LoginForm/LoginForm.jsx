import React from "react";

import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slice/userSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "../UI/Button/Button";

import s from "./LoginForm.module.css";
import ui from "../UI/uiStyles.module.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^[^\u0400-\u04FF]{8,}$/;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, "Неверный формат почты")
    .required("Пожалуйста введите почту"),
  password: Yup.string()
    .min(8, "Минимальная длина пароля 8 символов")
    .matches(passwordRegex, "Некорректный пароль")
    .required("Пожалуйста введите пароль"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handlerSubmit = (value) => {
    console.log("авторизация");
    console.log("login", value);

    const auth = {
      isAuth: true,
      login: value.email,
    };

    dispatch(setUser(auth));
    localStorage.setItem("isAuth", true);
    localStorage.setItem("login", value.email);
  };

  return (
    <div className={s.box}>
      <div className={s.content}>
        <h2 className={s.title}>Simple Hotel Check</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handlerSubmit(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={s.inputs}>
                <div className={s.wrapperInput}>
                  <div className={ui.boxInput}>
                    <p className={ui.title}>Логин</p>
                    <Field type="email" name="email" className={ui.input} />
                  </div>
                  <ErrorMessage
                    name="email"
                    component={"p"}
                    className={ui.errorMessage}
                  />
                </div>
                <div className={s.wrapperInput}>
                  <div className={ui.boxInput}>
                    <p className={ui.title}>Пароль</p>
                    <Field
                      type="password"
                      name="password"
                      className={ui.input}
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component={"p"}
                    className={ui.errorMessage}
                  />
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting}>
                Войти
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
