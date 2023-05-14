import { createSlice } from "@reduxjs/toolkit";
import Face from "./face";

const FaceSlice = createSlice({
  name: "face",
  initialState: Face,
  reducers: {},
});

export const { reducer: FaceReducer } = FaceSlice;
