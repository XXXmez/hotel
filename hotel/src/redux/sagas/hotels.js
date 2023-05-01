import { fetchHotelsAPI } from "../api/apiHotels";
import { put, takeEvery } from "redux-saga/effects";
import { setError, setHotels, setLoading } from "../slice/hotelsSlice";
import { SET_HOTELS } from "./types";

export function* getHotelsSaga(data) {
  // console.log("saga start", data);
  const { location: city, date: start, endDate: end } = data.search;
  yield put(setLoading(true));
  const hotels = yield fetchHotelsAPI(city, start, end);

  if (!hotels.isError) {
    yield put(setHotels(hotels));
  } else {
    yield put(setError(hotels));
  }
  yield put(setLoading(false));
}

export function* watchHotelsAsync() {
  yield takeEvery(SET_HOTELS, getHotelsSaga);
}
