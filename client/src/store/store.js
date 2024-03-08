import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

export const makeStore = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
  devTools: true,
});
