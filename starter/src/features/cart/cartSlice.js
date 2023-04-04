import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const shopItems = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  shopItems: [],
  cartItems: [],
  cartLength: 0,
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getShopItems = createAsyncThunk(
  "shop/getShopItems",
  async (_, thunkAPI) => {
    try {
      const response = await axios(shopItems);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("There was an error...");
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, {payload}) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);

      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, {payload}) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);

      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromShop: (state, action) => {
      const itemId = action.payload;

      state.shopItems = state.shopItems.filter((item) => item.id !== itemId);
    },
    addToShop: (state, action) => {
      state.shopItems.push(action.payload);
    },
    updateCartQuantity: (state) => {
      state.cartLength = state.cartItems.length
    },
  },
  extraReducers: {
    [getShopItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getShopItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.shopItems = action.payload; 
    },
    [getShopItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  addToCart,
  addToShop,
  removeFromShop,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  updateCartQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

