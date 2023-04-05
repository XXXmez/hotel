import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import createSagaMiddeleware from "@redux-saga/core";
import { rootSaga } from "./sagas/sagas";

const sagaMiddeleware = createSagaMiddeleware();

const store = configureStore({
  reducer: { user: userSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddeleware),
});

sagaMiddeleware.run(rootSaga);

export default store;
