/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiGet } from "../../apis/apis";
import type { FetchParksParams, ParksResponse } from "./interfaces";
import type { RootState } from "..";

export const fetchParks = createAsyncThunk<
  ParksResponse,
  FetchParksParams,
  { state: RootState; rejectValue: string }
>(
  "parks/fetchParks",
  async (
    { page, pageSize, stateCode, search },
    { signal, rejectWithValue }
  ) => {
    try {
      const res = await apiGet(
        "/parks",
        { page, limit: pageSize, stateCode, search },
        { signal } // 👈 PASS SIGNAL
      );

      return res.data;
    } catch (err: any) {
      // 👇 axios abort
      if (err.name === "CanceledError") {
        return rejectWithValue("Request cancelled");
      }

      return rejectWithValue(err.message);
    }
  }
);

// export const fetchParks = createAsyncThunk<
//   ParksResponse,
//   FetchParksParams,
//   { rejectValue: string }
// >(
//   "parks/fetchParks",
//   async ({ page = 1, pageSize = 10, stateCode }, thunkAPI) => {
//     try {
//       const res = await apiGet<ParksResponse>("/parks", {
//         page,
//         pageSize,
//         stateCode,
//       });

//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Failed to fetch parks"
//       );
//     }
//   }

// {
//   condition: (_, { getState }) => {
//     const { parks } = getState();

//     if (parks.status === "loading") {
//       return false;
//     }

//     return true;
//   },
// }
// );
