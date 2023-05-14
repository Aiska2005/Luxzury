import { createSlice } from "@reduxjs/toolkit";

import Brushes from "./Brushes";

const brushesSlice = createSlice({
  name: "brushes",
  initialState: Brushes,
  reducers: {},
});

export const { reducer: BrushesReducer } = brushesSlice;
