import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import cartReducer from './cartSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

export default store;
