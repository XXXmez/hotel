import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import hotelsSlice from "./slice/hotelsSlice";
import createSagaMiddeleware from "@redux-saga/core";
import { rootSaga } from "./sagas/sagas";
import settingsSlice from "./slice/settingSlice";
import favoritesSlice from "./slice/favoritesSlice";

const sagaMiddeleware = createSagaMiddeleware();

const store = configureStore({
  reducer: {
    user: userSlice,
    hotels: hotelsSlice,
    settings: settingsSlice,
    favorites: favoritesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddeleware),
});

sagaMiddeleware.run(rootSaga);

export default store;
