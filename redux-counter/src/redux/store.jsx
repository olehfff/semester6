import { configureStore } from '@reduxjs/toolkit';
import Count from './Counter.jsx';

export const store = configureStore({
  reducer: {
    number: Count,
  },
});