/** @format */

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchParks } from "./parks";
import { US_STATES } from "../../utils/states";

interface Parks {
  list: unknown[];
  loading: boolean;
  error: string | null;
  status: string | null;
  totalPages: number;
  page: number;
  usStates: object;
  selectedState: string;
}

const initialState: Parks = {
  list: [],
  loading: false,
  status: null,
  error: null,
  totalPages: 0,
  page: 1,
  usStates: US_STATES,
  selectedState: "",
};

const parksSlice = createSlice({
  name: "parks",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchParks.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "fulfilled";
        state.totalPages = action.payload["totalPages"];
        state.list = action.payload["data"];
        // state.list = [...state.list, ...action.payload["data"]];
        console.log(state.list);
      })
      .addCase(fetchParks.rejected, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export const { setPage } = parksSlice.actions;

export default parksSlice.reducer;
