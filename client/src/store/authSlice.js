import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: {},
  isAuthenticated: false,
  userId:null
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
    }
  },
});
export const { login, userToken, userId } = authSlice.actions;

export default authSlice.reducer;
