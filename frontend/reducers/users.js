import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  username: "",
  password: "",
  token: "",
};

export const usersSlice = createSlice({
  name: "users",

  initialState,
  reducers: {
    logUser: (state, action) => {
      state.firstname = action.payload;
      state.username = action.payload;
      state.password = action.payload;
      state.token = action.payload;
    },

    logoutUser: (state, action) => {
      state.firstname = "";
      state.username = "";
      state.password = "";
      state.token = "";
    },
  },
});

export const { logUser, logoutUser } = usersSlice.actions;
export default usersSlice.reducer;
