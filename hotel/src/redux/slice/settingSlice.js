import { createSlice } from "@reduxjs/toolkit";

export const settings = createSlice({
  name: "settings",
  initialState: { selectDate: "", residenceTime: 1, city: "" },

  reducers: {
    setSelectDate: (state, action) => {
      state.selectDate = action.payload;
    },
    setResidenceTime: (state, action) => {
      state.residenceTime = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setSelectDate, setResidenceTime, setCity } = settings.actions;
export default settings.reducer;
