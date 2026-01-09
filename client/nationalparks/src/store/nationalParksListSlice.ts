/** @format */

import { createSlice } from "@reduxjs/toolkit";

interface nationalParksList {
  status: string | null;
  parksList: object;
}

const initialState: nationalParksList = {
  status: null,
  parksList: {},
};

const NationalParksListSlice = createSlice({
  name: "nationalParksList",
  initialState,
  reducers: {},
});

// export const {} = NationalParksListSlice.actions;

export default NationalParksListSlice.reducer;
