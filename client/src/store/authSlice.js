import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: {},
  isAuthenticated: false,
  userId:null,
  userInfo: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = action.payload;
    },
    userToken(state, action) {
      state.userToken = action.payload;
    },
    userId(state, action){
      state.userId = action.payload
    },
    userInfo(state, action){
      state.userInfo = action.payload
    }
  },
});
export const { login, userToken, userId, userInfo } = authSlice.actions;

export default authSlice.reducer;
