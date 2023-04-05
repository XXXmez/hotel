import { fetchHotelsAPI } from "../api/apiHotels"
import {put} from 'redux-saga/effects'
import { setHotels } from "../slice/hotelsSlice"

export const getHotelsSaga = () => {
  const hotels = yield fetchHotelsAPI()
  yield put(setHotels(hotels))
}