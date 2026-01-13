/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiGet } from "../../apis/apis";
import type { FetchParksParams, ParksResponse } from "./interfaces";

export const fetchParks = createAsyncThunk<
  ParksResponse,
  FetchParksParams,
  { rejectValue: string }
>(
  "parks/fetchParks",
  async ({ page = 1, pageSize = 10, stateCode }, thunkAPI) => {
    try {
      const res = await apiGet<ParksResponse>("/parks", {
        page,
        pageSize,
        stateCode,
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch parks"
      );
    }
  }

  // {
  //   condition: (_, { getState }) => {
  //     const { parks } = getState();

  //     if (parks.status === "loading") {
  //       return false;
  //     }

  //     return true;
  //   },
  // }
);
