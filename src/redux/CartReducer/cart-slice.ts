import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/Products";

interface User {
  email: string;
  password: string;
  name: string;
  age: number;
}
interface CartState {
  cart: Product[];
}
const initialState: CartState = {
  cart: [],
};
export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter((product) => product.id !== productToRemove.id);
      state.cart = cartFiltered;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
