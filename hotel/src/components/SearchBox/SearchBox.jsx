import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addDaysToDate } from "../../functions";
import { SET_HOTELS } from "../../redux/sagas/types";
import {
  setCity,
  setResidenceTime,
  setSelectDate,
} from "../../redux/slice/settingSlice";
import Button from "../UI/Button/Button";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import Input from "../UI/Input/Input";
import WhiteBox from "../WhiteBox/WhiteBox";

import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispacth = useDispatch();

  const date = new Date();
  const dateYear = date.getFullYear();
  const dateMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  const dateDay = date.getDate().toString().padStart(2, "0");
  const fullDate = `${dateYear}-${dateMonth}-${dateDay}`;

  const [inputLocation, setInputLocation] = useState("Москва");
  const [inputDate, setInputDate] = useState(fullDate);
  const [inputCountDay, setInputCountDay] = useState("1");
  const [errorInput, setErrorInput] = useState(false);

  const handlerInputDay = (num) => {
    setInputCountDay(num);
  };
  const hanblerSortClick = () => {
    if (!inputLocation) {
      setErrorInput(true);
      return;
    }
    const endDate = addDaysToDate(inputDate, inputCountDay);
    dispacth({
      type: SET_HOTELS,
      search: { inputLocation, inputDate, endDate },
    });
    dispacth(setSelectDate(inputDate));
    dispacth(setResidenceTime(Number(inputCountDay)));
    dispacth(setCity(inputLocation));
    setErrorInput(false);
  };

  useEffect(() => {
    hanblerSortClick();
  }, []);

  return (
    <WhiteBox>
      <div className={s.barContainer}>
        <div className={s.sorts}>
          <div className={s.boxInput}>
            <Input
              value={inputLocation}
              onChange={setInputLocation}
              title={"Локация"}
            />
            {errorInput && inputLocation.length < 1 && (
              <ErrorMessage
                style={{ bottom: "-15px" }}
                message={"Пожалуйста заполните поле"}
              />
            )}
          </div>
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
  );
};

export default SearchBox;
