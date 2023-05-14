import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { accessoriesReducer } from "./accessories/AccessoriseSlice";
import { shoesReducer } from "./shoes/ShoesSlice";
import { colothReucer } from "./cloth/ClothSlice";
import { bodyReducer } from "./BlockBeauty/body/BodySlice";
import { FaceReducer } from "./BlockBeauty/face/faceSlice";
import { HairCareReducer } from "./BlockBeauty/HairCare/HairCareSlice";
import { MakeUpReducer } from "./BlockBeauty/Makeup/MakeupSlice";
import { ManicureReducer } from "./BlockBeauty/Manicure/ManicureSlice";
import { PerfumeryReducer } from "./BlockBeauty/Perfumery/PerfumerySlice";
import { stylingReducer } from "./BlockBeauty/Styling/StylingSlice";
import { BrushesReducer } from "./BlockBeauty/Brushes/BrushesSlice";
import { SportReducer } from "./sport/SportSlice";
import { cartShopReducer } from "./cart/CartSlice";
import { luxzuryReducer } from "./Luxzury/LuxzurySlice";
import { SearchAllReducer } from "./search/SearchSlice";

const allReducer = combineReducers({
  shoesItem: shoesReducer,
  TItem: colothReucer,
  accers: accessoriesReducer,
  body: bodyReducer,
  face: FaceReducer,
  hairCare: HairCareReducer,
  makeUp: MakeUpReducer,
  perfumery: PerfumeryReducer,
  manicure: ManicureReducer,
  styling: stylingReducer,
  brushes: BrushesReducer,
  sport: SportReducer,
  cart: cartShopReducer,
  luxzury: luxzuryReducer,
  // search
  search: SearchAllReducer,
});

const store = configureStore({
  reducer: allReducer,
});

export default store;
