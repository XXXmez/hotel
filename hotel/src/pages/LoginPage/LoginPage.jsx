import React from "react";
import BackgroundLoginPage from "../../components/BackgroundLoginPage/BackgroundLoginPage";
import LoginForm from "../../components/LoginForm/LoginForm";

import s from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <BackgroundLoginPage>
      <LoginForm />
    </BackgroundLoginPage>
  );
};

export default LoginPage;
