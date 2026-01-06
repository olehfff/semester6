import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: () => {
      
    },
    removeItem: () => {
      
    },
    incrementQuantity: () => {
      
    },
    decrementQuantity: () => {
      
    },
    clearCart: () => {
      
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer