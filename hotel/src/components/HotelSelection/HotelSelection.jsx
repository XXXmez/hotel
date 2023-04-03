import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import WhiteBox from "../WhiteBox/WhiteBox";

import s from "./HotelSelection.module.css";

const HotelSelection = () => {
  const [inputLocation, setInputLocation] = useState("Москва");
  const [inputDate, setInputDate] = useState("");
  const [inputCountDay, setInputCountDay] = useState("1");

  const hanblerSortClick = () => {
    console.log(inputLocation, inputDate, inputCountDay);
  };

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
          </div>
        </WhiteBox>
      </div>
      <div className={s.content}>
        <WhiteBox>
          <div className={s.container}>
            <div className={s.infoHotel}>
              <div className={s.geo}>
                <p>Отели</p>
              </div>
              <div className={s.date}>
                <p>07 июля 2020</p>
              </div>
            </div>
            <div className={s.images}></div>
            <div className={s.hotels}>
              <p className={s.hotelsCountForev}>
                Добавлено в Избранное: 3 отеля
              </p>
              <ul className={s.hotels_list}>
                <li className={s.hotels_item}>
                  <div className="img"></div>
                  <div className={s.descriptin}>
                    <p className="city">Moscow Marriott Grand Hotel</p>
                    <div className="rentalTime">
                      <p>7 июля 2020</p>
                      <p>1 день</p>
                    </div>
                    <div className="rating"></div>
                  </div>
                  <div className="price">
                    <buton>F</buton>
                    <div>
                      <span>Price:</span>
                      <p>23 924 ₽</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </WhiteBox>
      </div>
    </div>
  );
};

export default HotelSelection;
