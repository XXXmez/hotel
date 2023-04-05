import { createSlice } from "@reduxjs/toolkit";

export const favorites = createSlice({
  name: "favorites",
  initialState: [],

  reducers: {
    addFavorite: (state, action) => {
      const sort = state.some((el) => el.hotelId === action.payload.hotelId);

      if (!sort) {
        state = state.push(action.payload);
        // const toLoc = state;
        // localStorage.setItem("favorites", JSON.stringify(toLoc));
      } else {
        const newState = state.filter(
          (el) => el.hotelId !== action.payload.hotelId
        );
        // const toLoc = newState;
        // localStorage.setItem("favorites", JSON.stringify(toLoc));
        return newState;
      }
    },
  },
});

export const { addFavorite } = favorites.actions;
export default favorites.reducer;
