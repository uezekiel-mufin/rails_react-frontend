import { configureStore } from '@reduxjs/toolkit';
import greetingsSlice from './slices/greetingsSlice';

const store = configureStore({
  reducer: greetingsSlice,
});

export default store;
