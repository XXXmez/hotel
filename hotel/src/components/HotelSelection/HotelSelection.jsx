import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { ArrowToLeft } from "../../assets/SvgRet";
import ItemHotel from "../ItemHotel/ItemHotel";
import SliderRooms from "../SliderRooms/SliderRooms";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import WhiteBox from "../WhiteBox/WhiteBox";

import s from "./HotelSelection.module.css";
import { SET_HOTELS } from "../../redux/sagas/types";
import {
  setCity,
  setResidenceTime,
  setSelectDate,
} from "../../redux/slice/settingSlice";
import { addDaysToDate, formateDate, getWord } from "../../functions";
import FavoritesBox from "../FavoritesBox/FavoritesBox";

const HotelSelection = () => {
  const date = new Date();
  const dateYear = date.getFullYear();
  const dateMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  const dateDay = date.getDate().toString().padStart(2, "0");
  const fullDate = `${dateYear}-${dateMonth}-${dateDay}`;

  const [inputLocation, setInputLocation] = useState("Москва");
  const [inputDate, setInputDate] = useState(fullDate);
  const [inputCountDay, setInputCountDay] = useState("1");

  const [heightList, setHeightList] = useState("0");

  const refContainer = useRef();

  const dispacth = useDispatch();

  const { data, isError, error } = useSelector((state) => state.hotels);
  const favoritesData = useSelector((state) => state.favorites);
  const { city } = useSelector((state) => state.settings);

  const hanblerSortClick = () => {
    const endDate = addDaysToDate(inputDate, inputCountDay);
    dispacth({
      type: SET_HOTELS,
      search: { inputLocation, inputDate, endDate },
    });
    dispacth(setSelectDate(inputDate));
    dispacth(setResidenceTime(Number(inputCountDay)));
    dispacth(setCity(inputLocation));
  };

  useEffect(() => {
    setHeightList(
      refContainer.current.offsetHeight - 32 * 2 - 38 - 28 * 2 - 149 - (19 + 20)
    );
  }, []);

  useEffect(() => {
    hanblerSortClick();
  }, []);

  const handlerInputDay = (num) => {
    setInputCountDay(num);
  };

  const currentStrDate = formateDate(inputDate);

  return (
    <div className={s.box}>
      <div className={s.bar}>
        <WhiteBox>
          <div className={s.barContainer}>
            <div className={s.sorts}>
              <Input
                value={inputLocation}
                onChange={setInputLocation}
                title={"Локация"}
              />
              <Input
                value={inputDate}
                onChange={setInputDate}
                title={"Дата заселения"}
                type="date"
              />
              <Input
                value={inputCountDay}
                onChange={handlerInputDay}
                title={"Количество дней"}
                type="number"
              />
            </div>
            <Button onClick={hanblerSortClick}>Найти</Button>
          </div>
        </WhiteBox>
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
                Добавлено в Избранное: {favoritesData.length}{" "}
                {getWord(favoritesData.length, ["отель", "отеля", "отелей"])}
              </p>
              {isError && <h2>{error}</h2>}
              {!isError && (
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
