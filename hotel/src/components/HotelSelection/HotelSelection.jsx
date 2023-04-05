import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { ArrowToLeft } from "../../assets/SvgRet";
import HotelInfo from "../HotelInfo/HotelInfo";
import ItemHotel from "../ItemHotel/ItemHotel";
import SliderRooms from "../SliderRooms/SliderRooms";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import WhiteBox from "../WhiteBox/WhiteBox";

import s from "./HotelSelection.module.css";
import { SET_HOTELS } from "../../redux/sagas/types";

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

  const hanblerSortClick = () => {
    console.log(inputLocation, inputDate, inputCountDay);
  };

  useEffect(() => {
    setHeightList(
      refContainer.current.offsetHeight - 32 * 2 - 38 - 28 * 2 - 149 - (19 + 20)
    );
  }, []);

  useEffect(() => {
    console.log("Start: ", inputLocation, inputDate, inputCountDay);
    dispacth({ type: SET_HOTELS });
  }, []);

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
                onChange={setInputCountDay}
                title={"Количество дней"}
              />
            </div>
            <Button onClick={hanblerSortClick}>Найти</Button>
          </div>
        </WhiteBox>
        <WhiteBox>
          <div className={s.barContainer}>
            <h2 className={s.titleForeve}>Избранное</h2>
            <div className={s.selected}>
              <select></select>
              <select></select>
            </div>
            <ul>
              <HotelInfo />
            </ul>
          </div>
        </WhiteBox>
      </div>
      <div className={s.content} ref={refContainer}>
        <WhiteBox style={{ height: "100%" }}>
          <div className={s.container}>
            <div className={s.infoHotel}>
              <div className={s.geo}>
                <p>Отели</p>
                <ArrowToLeft />
                <p>Москва</p>
              </div>
              <div className={s.date}>
                <p>07 июля 2020</p>
              </div>
            </div>
            <div className={s.rooms}>
              <SliderRooms />
            </div>
            <div className={s.hotels}>
              <p className={s.hotelsCountForev}>
                Добавлено в Избранное: 3 отеля
              </p>
              <ul
                className={s.hotels_list}
                style={{ height: `${heightList}px` }}
              >
                <ItemHotel />
                <ItemHotel />
                <ItemHotel />
                <ItemHotel />
                <ItemHotel />
                <ItemHotel />
                <ItemHotel />
                <ItemHotel />
                <ItemHotel />
                <ItemHotel />
              </ul>
            </div>
          </div>
        </WhiteBox>
      </div>
    </div>
  );
};

export default HotelSelection;
