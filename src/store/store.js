import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";

//! STORE de REDUX
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, //* Nuestro slice - reducer
  },
});
