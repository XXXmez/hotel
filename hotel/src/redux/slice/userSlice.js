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
    setUser: (state, action) => {
      state = action.payload;
      return state;
    },
    exitUser: (state) => {
      state.login = "";
      state.isAuth = false;
      localStorage.setItem("isAuth", false);
      localStorage.setItem("login", "");
    },
  },
});

export const { setUser, exitUser } = user.actions;
export default user.reducer;
