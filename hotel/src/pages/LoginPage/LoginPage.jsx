import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import BackgroundLoginPage from "../../components/BackgroundLoginPage/BackgroundLoginPage";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <BackgroundLoginPage>
      <LoginForm />
    </BackgroundLoginPage>
  );
};

export default LoginPage;
