import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    isError: false,
    login: "",
    error: "",
  },
  reducers: {
    getUsers: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { getUsers } = user.actions;
export default user.reducer;
