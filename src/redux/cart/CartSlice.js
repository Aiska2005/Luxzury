import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartShop: [],
  },
  reducers: {
    getCartShop(state, action) {
      const newItem = {
        ...action.payload,
        count: 1,
      };
      const hasInCart = state.cartShop.find((el) => el.id === newItem.id);
      if (hasInCart) {
        hasInCart.count += 1;
      } else {
        state.cartShop.push(newItem);
      }
    },
    removeInCart(state, action) {
      const id = action.payload;
      state.cartShop = state.cartShop.filter((el) => el.id !== id);
    },
  },
});

export const { reducer: cartShopReducer, actions } = CartSlice;
