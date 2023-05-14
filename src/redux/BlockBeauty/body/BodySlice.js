import { createSlice } from "@reduxjs/toolkit";
import Body from "./Body";

const bodySlice = createSlice({
  name: "body",
  initialState: Body,
  reducers: {},
});

export const { reducer: bodyReducer } = bodySlice;
