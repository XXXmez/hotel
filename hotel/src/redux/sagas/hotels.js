import { fetchHotelsAPI } from "../api/apiHotels"
import { put } from 'redux-saga/effects'
import { setHotels } from "../slice/hotelsSlice"

export const getHotelsSaga = (city, start, end) => {
  const hotels = yield fetchHotelsAPI(city, start, end)
  yield put(setHotels(hotels))
}