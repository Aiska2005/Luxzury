import { createSlice } from "@reduxjs/toolkit";
import Perfumery from "../../../redux/BlockBeauty/Perfumery/Perfumery";

const PerfumerySlice = createSlice({
  name: "Perfumery",
  initialState: Perfumery,
  reducers: {},
});

export const { reducer: PerfumeryReducer } = PerfumerySlice;
