import axios from "axios";

//! Definimos una configuracion Default  a AXIOS evitando que repitamos codigo (Reutilizable)
export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
