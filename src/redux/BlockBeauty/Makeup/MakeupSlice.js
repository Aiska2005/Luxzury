import { createSlice } from "@reduxjs/toolkit";
import MakeUp from "./Makeup";

const MakeUpSlice = createSlice({
  name: "makeUp",
  initialState: MakeUp,
  reducers: {},
});

export const { reducer: MakeUpReducer } = MakeUpSlice;
