import { createSlice } from "@reduxjs/toolkit";
import Accessories from "../accessories/Accessories";

const accessoriesSlice = createSlice({
  name: "accessories",
  initialState: Accessories,
  reducers: {},
});
export const { reducer: accessoriesReducer } = accessoriesSlice;
