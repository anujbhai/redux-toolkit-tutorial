import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
import shopReducer from "./features/shop/shopSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    shop: shopReducer,
  },
});

