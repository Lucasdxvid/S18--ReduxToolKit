import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemon";

//! STORE de REDUX
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, //* Nuestro slice - reducer contador
    pokemon: pokemonSlice.reducer, //* Nuestro slice - PokemonApi
  },
});
