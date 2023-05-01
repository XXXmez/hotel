import { createSlice } from "@reduxjs/toolkit";

export const hotels = createSlice({
  name: "hotels",
  initialState: { data: [], isError: false, error: "", loading: false },

  reducers: {
    setHotels: (state, action) => {
      // console.log("action-----------> ", action);
      state.data = action.payload.data;
      state.isError = false;
      state.error = "";
      return state;
    },
    setError: (state, action) => {
      // console.log("setErr-----------> ", action);
      state.data = [];
      state.isError = true;
      state.error = "Возникла ошибка во время запроса";
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setHotels, setError, setLoading } = hotels.actions;
export default hotels.reducer;
