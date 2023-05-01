import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowDown, ArrowUp } from "../../assets/SvgRet";
import {
  setSortPriceDown,
  setSortPriceUP,
  setSortRaitingDown,
  setSortRaitingUP,
} from "../../redux/slice/favoritesSlice";
import HotelInfo from "../HotelInfo/HotelInfo";
import WhiteBox from "../WhiteBox/WhiteBox";

import s from "./FavoritesBox.module.css";

const FavoritesBox = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.data);
  const sortRaitingUP = useSelector((state) => state.favorites.sortRaitingUP);
  const sortRaitingDown = useSelector(
    (state) => state.favorites.sortRaitingDown
  );
  const sortPriceUP = useSelector((state) => state.favorites.sortPriceUP);
  const sortPriceDown = useSelector((state) => state.favorites.sortPriceDown);
  // console.log(sortRaitingUP, sortRaitingDown, sortPriceUP, sortPriceDown);

  let heightList = 0;

  const ref = useRef();
  if (ref.current) {
    const box = ref.current;
    box.style.height = "100%";
    box.style.overflow = "hidden";
    const boxHeight = box.offsetHeight;

    const list = boxHeight - 32 * 4 - 28.75 - 30.47;
    heightList = list;
  }

  const handlerClickSortRaitingUP = () => {
    dispatch(setSortRaitingUP());
  };
  const handlerClickSortRaitingDown = () => {
    dispatch(setSortRaitingDown());
  };
  const handlerClickSortPriceUP = () => {
    dispatch(setSortPriceUP());
  };
  const handlerClickSortPriceDown = () => {
    dispatch(setSortPriceDown());
  };

  // console.log(favorites);

  return (
    <WhiteBox ref={ref}>
      <div className={s.barContainer}>
        <h2 className={s.titleForeve}>Избранное</h2>
        {favorites.length > 0 && (
          <div className={s.sorted}>
            <button
              className={s.sortedBtn}
              onClick={
                sortRaitingUP
                  ? handlerClickSortRaitingDown
                  : handlerClickSortRaitingUP
              }
              style={
                sortRaitingUP || sortRaitingDown
                  ? { border: "1px solid #41522e" }
                  : { border: "1px solid #E5E5E5" }
              }
            >
              Рейтинг
              <div className={s.arrows}>
                <ArrowUp on={sortRaitingUP} />
                <ArrowDown on={sortRaitingDown} />
              </div>
            </button>
            <button
              className={s.sortedBtn}
              onClick={
                sortPriceUP
                  ? handlerClickSortPriceDown
                  : handlerClickSortPriceUP
              }
              style={
                sortPriceUP || sortPriceDown
                  ? { border: "1px solid #41522e" }
                  : { border: "1px solid #E5E5E5" }
              }
            >
              Цена
              <div className={s.arrows}>
                <ArrowUp on={sortPriceUP} />
                <ArrowDown on={sortPriceDown} />
              </div>
            </button>
          </div>
        )}
        <ul className={s.list} style={heightList ? { height: heightList } : {}}>
          {favorites.map((el, ind) => (
            <li className={s.wrapper} key={ind}>
              <HotelInfo
                hotelName={el.hotelName}
                stars={el.stars}
                price={el.price}
                hotelId={el.hotelId}
                data={el.startDate}
                day={el.countDay}
                like={true}
              />
            </li>
          ))}
        </ul>
      </div>
    </WhiteBox>
  );
};

export default FavoritesBox;
