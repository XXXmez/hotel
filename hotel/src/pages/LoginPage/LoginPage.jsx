import React from "react";
import BackgroundLoginPage from "../../components/BackgroundLoginPage/BackgroundLoginPage";
import LoginForm from "../../components/LoginForm/LoginForm";

import s from "./LoginPage.module.css";

const LoginPage = ({ setIsAuth }) => {
  return (
    <BackgroundLoginPage>
      <LoginForm setIsAuth={setIsAuth} />
    </BackgroundLoginPage>
  );
};

export default LoginPage;
