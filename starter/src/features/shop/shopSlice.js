import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const shopItems = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  shopItems: [],
  cartItems: [],
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

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;

      console.log("added item:", action.payload);
      state.cartItems = state.shopItems.filter((item) => item.id === itemId);
    },
    removeFromShop: (state, action) => {
      const itemId = action.payload;

      state.shopItems = state.shopItems.filter((item) => item.id !== itemId);
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
  removeFromShop,
} = shopSlice.actions;
export default shopSlice.reducer;