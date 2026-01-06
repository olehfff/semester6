import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../redux/contactsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});