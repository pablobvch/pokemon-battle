import { useEffect, useState } from "react";
import { getAllPokemons } from "../api";

const getRandomIndex = (maxIndex, excludeIndex) => {
  let randomIndex = Math.floor(Math.random() * maxIndex);

  while (randomIndex === excludeIndex) {
    randomIndex = Math.floor(Math.random() * maxIndex);
  }

  return randomIndex;
};

const getPokemonRandomly = (pokemons, excludeId) => {
  if (!pokemons || pokemons.length === 0) {
    return null;
  }

  const randomIndex = getRandomIndex(
    pokemons.length,
    pokemons.findIndex((pokemon) => pokemon.id === excludeId)
  );

  return pokemons[randomIndex];
};

const usePokemon = () => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getAllPokemons();
      setPokemons(data);
    };
    fetchPokemons();
  }, []);

  return { pokemons, setPokemons, getPokemonRandomly };
};

export { usePokemon };
