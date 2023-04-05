import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
const CountReducer = createSlice({
  name: "CountReducer",
  initialState,
  reducers: {
    increament: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
  },
});

export const { increament, decrement } = CountReducer.actions;
export default CountReducer.reducer;
