import { createSlice } from "@reduxjs/toolkit";

export const hotels = createSlice({
  name: "hotels",
  initialState: [],
  reducers: {
    setHotels: (state, action) => {
      console.log(action);
      state = action.payload;
      return state;
    },
  },
});

export const { setHotels } = hotels.actions;
export default hotels.reducer;
