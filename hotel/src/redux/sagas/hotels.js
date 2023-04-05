import { fetchHotelsAPI } from "../api/apiHotels";
import { put, takeEvery } from "redux-saga/effects";
import { setError, setHotels } from "../slice/hotelsSlice";
import { SET_HOTELS } from "./types";

export function* getHotelsSaga(data) {
  // console.log("saga start", data);
  const { inputLocation: city, inputDate: start, endDate: end } = data.search;

  const hotels = yield fetchHotelsAPI(city, start, end);
  console.log("Выполненый запрос: ", hotels);
  if (!hotels.isError) {
    yield put(setHotels(hotels));
  } else {
    yield put(setError(hotels));
  }
}

export function* watchHotelsAsync() {
  yield takeEvery(SET_HOTELS, getHotelsSaga);
}
