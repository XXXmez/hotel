import React from "react";

import img1 from "../../assets/ImgRooms/room1.jpg";
import img2 from "../../assets/ImgRooms/room2.jpg";
import img3 from "../../assets/ImgRooms/room3.jpg";
import img4 from "../../assets/ImgRooms/room4.jpg";

import s from "./SliderRooms.module.css";

// const SliderRooms = () => {
//   return (
//     <div className={s.box}>
//       <ul className={s.list}>
//         <li className={s.item}>
//           <img src={img1} />
//         </li>
//         <li className={s.item}>
//           <img src={img2} />
//         </li>
//         <li className={s.item}>
//           <img src={img3} />
//         </li>
//         <li className={s.item}>
//           <img src={img4} />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SliderRooms;
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

export default () => {
  return (
    <Swiper
      freeMode={true}
      grabCursor={true}
      modules={[FreeMode]}
      spaceBetween={30}
      slidesPerView={3.49}
    >
      <SwiperSlide className={s.res_slide}>
        <img src={img1} />
      </SwiperSlide>
      <SwiperSlide className={s.res_slide}>
        <img src={img2} />
      </SwiperSlide>
      <SwiperSlide className={s.res_slide}>
        <img src={img3} />
      </SwiperSlide>
      <SwiperSlide className={s.res_slide}>
        <img src={img4} />
      </SwiperSlide>
    </Swiper>
  );
};
