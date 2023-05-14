import { createSlice } from "@reduxjs/toolkit";
import Styling from "./Styling";

const stylingSlice = createSlice({
  name: "styling",
  initialState: Styling,
  reducers: {},
});

export const { reducer: stylingReducer } = stylingSlice;
