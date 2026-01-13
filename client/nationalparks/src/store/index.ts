/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import parksSlice from "./slices/parksSlice";

export const store = configureStore({
  reducer: {
    parksList: parksSlice,
    authSlice: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
