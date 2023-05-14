import { createSlice } from "@reduxjs/toolkit";
import HairCare from "../../../redux/BlockBeauty/HairCare/HairCare";

const HairCareSlice = createSlice({
  name: "hair",
  initialState: HairCare,
  reducers: {},
});

export const { reducer: HairCareReducer } = HairCareSlice;
