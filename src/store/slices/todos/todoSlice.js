import { createSlice } from "@reduxjs/toolkit";

//! Usamos nuestro snippet custom (redux-slice) para crear el SLICE

export const todoSlice = createSlice({
  name: "name",
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = todoSlice.actions;
