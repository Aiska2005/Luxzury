import { createSlice } from "@reduxjs/toolkit";
import clothes from "./cloth";

const clothSlice = createSlice({
  name: "cloth",
  initialState: clothes,
  reducers: {},
});
export const { reducer: colothReucer } = clothSlice;
