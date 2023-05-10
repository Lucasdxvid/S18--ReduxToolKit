import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  //! Evitamos que la peticion se realize mas de una vez (solo cuando se renderiza primera vez) CON useEffect

  const dispatch = useDispatch(getPokemons());

  useEffect(() => {
    dispatch(getPokemons()); // Disparamos nuestro THUNK getPokemon (nos pide el page por parametro porque no lo definimos)
  }, []);

  return (
    <>
      <div>PokemonApp</div>
      <hr />
      {/* PokeApp */}
      <ul>
        <li>x</li>
        <li>x</li>
        <li>x</li>
      </ul>
    </>
  );
};
