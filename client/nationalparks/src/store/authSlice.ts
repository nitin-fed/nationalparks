/** @format */

import { createSlice } from "@reduxjs/toolkit";

interface authSlice {
  user: string;
  isAuthenticated: boolean;
}

const initialState: authSlice = {
  user: "Nitin",
  isAuthenticated: true,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
});

// export const {} = NationalParksListSlice.actions;

export default authSlice.reducer;
