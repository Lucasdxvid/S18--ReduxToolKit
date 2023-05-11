import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  //! Evitamos que la peticion se realize mas de una vez (solo cuando se renderiza primera vez) CON useEffect

  const dispatch = useDispatch(getPokemons());

  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemon); // desestructuramos "estados" del slice pokemon

  useEffect(() => {
    dispatch(getPokemons()); // Disparamos nuestro THUNK getPokemon (nos pide el page por parametro porque no lo definimos)
  }, []);

  return (
    <>
      <div>PokemonApp</div>
      <hr />
      <span>Loading: {isLoading ? "true" : "false"}</span>

      {/* PokeApp */}

      {/* Desestructuramos name y otras cosas del objeto pokemon de la api */}
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
