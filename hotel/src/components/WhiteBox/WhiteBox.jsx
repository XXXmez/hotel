import React from "react";

import s from "./WhiteBox.module.css";

// const WhiteBox = ({ children, ...other }) => {
//   return (
//     <div {...other} className={s.box}>
//       {children}
//     </div>
//   );
// };
const WhiteBox = React.forwardRef(({ children, ...other }, ref) => {
  return (
    <div ref={ref} {...other} className={s.box}>
      {children}
    </div>
  );
});

export default WhiteBox;
