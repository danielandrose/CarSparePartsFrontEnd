import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 20,
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload || 1; // Default payload to 1 if not provided
    },
    decrement: (state, action) => {
      state.count -= action.payload || 1; // Default payload to 1 if not provided
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
