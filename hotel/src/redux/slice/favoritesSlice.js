import { createSlice } from "@reduxjs/toolkit";

export const favorites = createSlice({
  name: "favorites",
  initialState: {
    data: [],
    sortRaitingUP: true,
    sortRaitingDown: false,
    sortPriceUP: false,
    sortPriceDown: false,
  },

  reducers: {
    addFavorite: (state, action) => {
      const sort = state.data.some(
        (el) => el.hotelId === action.payload.hotelId
      );

      if (!sort) {
        console.log("добавляем");
        state.data.push(action.payload);
        state.data.sort((a, b) => {
          if (state.sortRaitingUP) {
            return a.stars - b.stars;
          }
          if (state.sortRaitingDown) {
            return b.stars - a.stars;
          }
          if (state.sortPriceUP) {
            return a.price - b.price;
          }
          if (state.sortPriceDown) {
            return b.price - a.price;
          }
        });
      } else {
        state.data = state.data.filter(
          (el) => el.hotelId !== action.payload.hotelId
        );
      }
    },
    setSortRaitingUP: (state) => {
      state.sortRaitingUP = true;
      state.sortRaitingDown = false;
      state.sortPriceUP = false;
      state.sortPriceDown = false;
      state.data.sort((a, b) => b.stars - a.stars);
    },
    setSortRaitingDown: (state) => {
      state.sortRaitingUP = false;
      state.sortRaitingDown = true;
      state.sortPriceUP = false;
      state.sortPriceDown = false;
      state.data.sort((a, b) => a.stars - b.stars);
    },
    setSortPriceUP: (state) => {
      state.sortRaitingUP = false;
      state.sortRaitingDown = false;
      state.sortPriceUP = true;
      state.sortPriceDown = false;
      state.data.sort((a, b) => a.price - b.price);
    },
    setSortPriceDown: (state) => {
      state.sortRaitingUP = false;
      state.sortRaitingDown = false;
      state.sortPriceUP = false;
      state.sortPriceDown = true;
      state.data.sort((a, b) => b.price - a.price);
    },
  },
});

export const {
  addFavorite,
  setSortRaitingUP,
  setSortRaitingDown,
  setSortPriceUP,
  setSortPriceDown,
} = favorites.actions;
export default favorites.reducer;
