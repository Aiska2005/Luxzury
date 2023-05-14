import { createSlice } from "@reduxjs/toolkit";
import Luzxyry from "./Luxzury";

const luxzurySlice = createSlice({
  name: "Luxzury",
  initialState: Luzxyry,
  reducers: "",
});

export const { reducer: luxzuryReducer } = luxzurySlice;
