/** @format */

import { configureStore } from "@reduxjs/toolkit";
import NationalParksListSlice from "./nationalParksListSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    nationlaParksList: NationalParksListSlice,
    authSlice: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
