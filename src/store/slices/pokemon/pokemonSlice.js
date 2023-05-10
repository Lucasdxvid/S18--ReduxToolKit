import { createSlice } from "@reduxjs/toolkit";

//! Slice con serie de reducers para el uso de la PokeApi ASYNC

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 10,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true; //* Definimos el loading, el estado pasara a TRUE cuando llamemos el reducer (estado de carga)
    },
    setPokemons: (state, action) => {
      state.isLoading = false; //* Deja de cargar
      state.page = action.payload.page; //* Establecemos el numero de la pagina
      state.pokemons = action.payload.pokemons //* Rellenamos el objeto de pokemons
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
