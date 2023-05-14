import { createSlice } from "@reduxjs/toolkit";

import Accessories from "../accessories/Accessories";
import Body from "../BlockBeauty/body/Body";
import Brushes from "../BlockBeauty/Brushes/Brushes";
import Face from "../BlockBeauty/face/face";
import HairCase from "../BlockBeauty/HairCare/HairCare";
import MakeUp from "../BlockBeauty/Makeup/Makeup";
import Manicure from "../BlockBeauty/Manicure/Manicure";
import Perfumery from "../BlockBeauty/Perfumery/Perfumery";
import Styling from "../BlockBeauty/Styling/Styling";
import Cloth from "../cloth/cloth";
import Shoes from "../shoes/Shoes";
import Sport from "../sport/Sport";

const searchAll = createSlice({
  name: "searchAll",
  initialState: {
    item1: [
      ...Accessories,
      ...Body,
      ...Brushes,
      ...Face,
      ...HairCase,
      ...MakeUp,
      ...Manicure,
      ...Perfumery,
      ...Shoes,
      ...Sport,
      ...Styling,
      ...Cloth,
    ],
    item2: [],
  },
  reducers: {
    alldannyi: (state, action) => {
      //   let item1 = state;
      state.item2 = state.item1.filter((search) =>
        search.title.toLowerCase().includes(action.payload)
      );
    },
    anyBlock: (state) => {
      state.item2 = [];
    },
  },
});
export const { reducer: SearchAllReducer, actions } = searchAll;
