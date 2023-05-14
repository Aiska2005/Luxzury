import { createSlice } from "@reduxjs/toolkit";
import shoes from "./Shoes";

const shoesSlice = createSlice({
  name: "shoes",
  initialState: shoes,
  reducers: {},
});
export const { reducer: shoesReducer } = shoesSlice;
