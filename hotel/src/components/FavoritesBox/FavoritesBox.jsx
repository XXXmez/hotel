import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ArrowDown, ArrowUp } from "../../assets/SvgRet";
import HotelInfo from "../HotelInfo/HotelInfo";
import WhiteBox from "../WhiteBox/WhiteBox";

import s from "./FavoritesBox.module.css";

const FavoritesBox = () => {
  const favoritesData = useSelector((state) => state.favorites);

  const [favorites, setFavorites] = useState([]);

  const [sortRaiting, setSortRaiting] = useState({ up: true, down: false });
  const [sortPrice, setSortPrice] = useState({ up: false, down: false });

  useEffect(() => {
    let newFav = [...favoritesData];
    if (sortRaiting.up || sortRaiting.down) {
      if (sortRaiting.up) {
        newFav.sort((a, b) => a.stars - b.stars);
      } else {
        newFav.sort((a, b) => b.stars - a.stars);
      }
    }
    if (sortPrice.up || sortPrice.down) {
      if (sortPrice.up) {
        newFav.sort((a, b) => a.price - b.price);
      } else {
        newFav.sort((a, b) => b.price - a.price);
      }
    }
    setFavorites(newFav);
  }, [
    sortRaiting.up,
    sortRaiting.down,
    sortPrice.up,
    sortPrice.down,
    favoritesData,
  ]);

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

  const handlerClickSortRaiting = () => {
    setSortPrice({ up: false, down: false });
    if (sortRaiting.up) {
      setSortRaiting({ up: false, down: true });
    } else {
      setSortRaiting({ up: true, down: false });
    }
  };
  const handlerClickSortPrice = () => {
    setSortRaiting({ up: false, down: false });
    if (sortPrice.up) {
      setSortPrice({ up: false, down: true });
    } else {
      setSortPrice({ up: true, down: false });
    }
  };

  // console.log(favoritesData);

  return (
    <WhiteBox ref={ref}>
      <div className={s.barContainer}>
        <h2 className={s.titleForeve}>Избранное</h2>
        <div className={s.sorted}>
          <button
            className={s.sortedBtn}
            onClick={handlerClickSortRaiting}
            style={
              sortRaiting.up || sortRaiting.down
                ? { border: "1px solid #41522e" }
                : { border: "1px solid #E5E5E5" }
            }
          >
            Рейтинг
            <div className={s.arrows}>
              <ArrowUp on={sortRaiting.up} />
              <ArrowDown on={sortRaiting.down} />
            </div>
          </button>
          <button
            className={s.sortedBtn}
            onClick={handlerClickSortPrice}
            style={
              sortPrice.up || sortPrice.down
                ? { border: "1px solid #41522e" }
                : { border: "1px solid #E5E5E5" }
            }
          >
            Цена
            <div className={s.arrows}>
              <ArrowUp on={sortPrice.up} />
              <ArrowDown on={sortPrice.down} />
            </div>
          </button>
        </div>
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
