import { createSlice } from "@reduxjs/toolkit";

export const hotels = createSlice({
  name: "hotels",
  initialState: { data: [], isError: false, error: "" },

  reducers: {
    setHotels: (state, action) => {
      console.log("action-----------> ", action);
      state.data = action.payload.data;
      state.isError = false;
      state.error = "";
      return state;
    },
    setError: (state, action) => {
      console.log("setErr-----------> ", action);
      state.data = [];
      state.isError = true;
      state.error = "Возникла ошибка во время запроса";
    },
  },
});

export const { setHotels, setError } = hotels.actions;
export default hotels.reducer;
