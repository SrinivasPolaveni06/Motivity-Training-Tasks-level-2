import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "../Reducers/CountReducer";

export const Store = configureStore({
  reducer: {
    CountReducer: CountReducer,
  },
});
