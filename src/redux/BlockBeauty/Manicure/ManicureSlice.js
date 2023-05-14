import { createSlice } from "@reduxjs/toolkit";
import Manicure from "../../../redux/BlockBeauty/Manicure/Manicure";

const ManicureSlice = createSlice({
  name: "name",
  initialState: Manicure,
  reducers: {},
});
export const { reducer: ManicureReducer } = ManicureSlice;
