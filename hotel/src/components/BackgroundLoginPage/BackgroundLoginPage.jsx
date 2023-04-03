import React from "react";

import s from "./BackgroundLoginPage.module.css";

const BackgroundLoginPage = ({ children }) => {
  return (
    <div className={s.box}>
      <div className={s.box_blur}>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};

export default BackgroundLoginPage;
