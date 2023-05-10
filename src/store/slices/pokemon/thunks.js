import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

//! Thunks: funciones que ejecutan acciones asíncronas que disparan otra acción cuando se resuelve la acción asíncrona

export const getPokemons = (page = 0) => {
  //* Funcion que retorna otra funcion (argumento dispatch ya que llama a otra accion) y getState para obtener el rootState (Si el user esta autentificado, etc.)
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons); // Hacemos que nuestro store este en estado de CARGA (true)

    // TODO: Realizar petición HTTP

    // dispatch(setPokemons) //* Establecemos los pokemons llamados en el estado
  };
};
