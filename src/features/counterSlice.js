import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 10,
  reducers: {
    increment(state) {
      return (state = state + 5);
    },
    
    decrement(state) {
        return (state = state - 5);
      },
  },
});

export const { increment,decrement } = counterSlice.actions;
export default counterSlice.reducer;
