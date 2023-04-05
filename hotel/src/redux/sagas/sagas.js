import { all } from "redux-saga/effects";
import { watchHotelsAsync } from "./hotels";

export function* rootSaga() {
  yield all([watchHotelsAsync()]);
}
