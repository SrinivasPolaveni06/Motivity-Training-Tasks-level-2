import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todosCount: 0,
};

const todosCountSlice = createSlice({
  name: "todosCountSlice",
  initialState,
  reducers: {
    todosListCount: (state, action) => {
      state.todosCount = action.payload.length;
    },
  },
});

export const { todosListCount } = todosCountSlice.actions;
export default todosCountSlice.reducer;
