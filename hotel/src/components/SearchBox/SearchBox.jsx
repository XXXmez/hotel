import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addDaysToDate } from "../../functions";
import { SET_HOTELS } from "../../redux/sagas/types";
import {
  setCity,
  setResidenceTime,
  setSelectDate,
} from "../../redux/slice/settingSlice";
import Button from "../UI/Button/Button";

import WhiteBox from "../WhiteBox/WhiteBox";

import s from "./SearchBox.module.css";
import ui from "../UI/uiStyles.module.css";

const validationSchema = Yup.object().shape({
  location: Yup.string().required("Пожалуйста введите название города"),
  countDays: Yup.number()
    .positive("Минимальное количество дней - 1")
    .required("Пожалуйста, введите количество дней"),
});

const SearchBox = () => {
  const dispacth = useDispatch();

  const date = new Date();
  const dateYear = date.getFullYear();
  const dateMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  const dateDay = date.getDate().toString().padStart(2, "0");
  const fullDate = `${dateYear}-${dateMonth}-${dateDay}`;

  const handlerSort = (value) => {
    const { countDays, date, location } = value;

    const endDate = addDaysToDate(date, countDays);

    dispacth({
      type: SET_HOTELS,
      search: { location, date, endDate },
    });
    dispacth(setSelectDate(date));
    dispacth(setResidenceTime(countDays));
    dispacth(setCity(location));

    return true;
  };

  useEffect(() => {
    handlerSort({ location: "Москва", date: fullDate, countDays: 1 });
  }, []);

  return (
    <WhiteBox>
      <div className={s.barContainer}>
        <Formik
          initialValues={{ location: "Москва", date: fullDate, countDays: 1 }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            handlerSort(values);
            setSubmitting(false);
          }}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={s.sorts}>
                <div className={ui.boxInput}>
                  <p className={ui.title}>Локация</p>
                  <Field type="text" name="location" className={ui.input} />
                  <ErrorMessage
                    name="location"
                    component={"p"}
                    className={ui.errorMessage}
                  />
                </div>
                <div className={ui.boxInput}>
                  <p className={ui.title}>Дата заселения</p>
                  <Field type="date" name="date" className={ui.input} />
                </div>
                <div className={ui.boxInput}>
                  <p className={ui.title}>Количество дней</p>
                  <Field type="number" name="countDays" className={ui.input} />
                  <ErrorMessage
                    name="countDays"
                    component={"p"}
                    className={ui.errorMessage}
                  />
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting}>
                Найти
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </WhiteBox>
  );
};

export default SearchBox;
