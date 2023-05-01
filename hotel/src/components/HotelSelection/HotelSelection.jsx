import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { ArrowToLeft } from "../../assets/SvgRet";
import ItemHotel from "../ItemHotel/ItemHotel";
import SliderRooms from "../SliderRooms/SliderRooms";
import { useSelector } from "react-redux";

import WhiteBox from "../WhiteBox/WhiteBox";

import s from "./HotelSelection.module.css";

import { formateDate, getWord } from "../../functions";
import FavoritesBox from "../FavoritesBox/FavoritesBox";

import SearchBox from "../SearchBox/SearchBox";

const HotelSelection = () => {
  const [heightList, setHeightList] = useState("0");

  const refContainer = useRef();

  const { data, isError, error, loading } = useSelector(
    (state) => state.hotels
  );
  const selectDate = useSelector((state) => state.settings.selectDate);

  const favorites = useSelector((state) => state.favorites.data);
  const { city } = useSelector((state) => state.settings);

  useEffect(() => {
    setHeightList(
      refContainer.current.offsetHeight - 32 * 2 - 38 - 28 * 2 - 149 - (19 + 20)
    );
  }, []);

  const currentStrDate = formateDate(selectDate);

  return (
    <div className={s.box}>
      <div className={s.bar}>
        <SearchBox />
        <FavoritesBox />
      </div>
      <div className={s.content} ref={refContainer}>
        <WhiteBox style={{ height: "100%" }}>
          <div className={s.container}>
            <div className={s.infoHotel}>
              <div className={s.geo}>
                <p>Отели</p>
                <ArrowToLeft />
                <p>{city}</p>
              </div>
              <div className={s.date}>
                <p>{currentStrDate}</p>
              </div>
            </div>
            <div className={s.rooms}>
              <SliderRooms />
            </div>
            <div className={s.hotels}>
              <p className={s.hotelsCountForev}>
                Добавлено в Избранное: {favorites.length}{" "}
                {getWord(favorites.length, ["отель", "отеля", "отелей"])}
              </p>
              {isError && <h2>{error}</h2>}
              {loading && <h2>{"Загрузка..."}</h2>}
              {!isError && !loading && (
                <ul
                  className={s.hotels_list}
                  style={{ height: `${heightList}px` }}
                >
                  {data.map((hotel) => (
                    <ItemHotel
                      key={hotel.hotelId}
                      hotelName={hotel.hotelName}
                      stars={hotel.stars}
                      price={hotel.priceAvg}
                      hotelId={hotel.hotelId}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </WhiteBox>
      </div>
    </div>
  );
};

export default HotelSelection;
