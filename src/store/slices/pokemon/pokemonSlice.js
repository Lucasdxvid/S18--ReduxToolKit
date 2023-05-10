import { createSlice } from "@reduxjs/toolkit";

//! Slice con serie de reducers para el uso de la PokeApi ASYNC

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 10,
    pokemon: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true; //* Definimos el loading, el estado pasara a TRUE cuando llamemos el reducer
    },
    setPokemons: (state, action) => {
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
