import { createSlice } from "@reduxjs/toolkit";
import Sport from "./Sport";

const SportSlice = createSlice({
  name: "sport",
  initialState: Sport,
  reducers: {},
});
export const { reducer: SportReducer } = SportSlice;
