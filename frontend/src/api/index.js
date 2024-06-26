import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const getAllPokemons = async () => {
  try {
    const url = `${VITE_API_URL}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log("Error by getting all pokemons", error);
  }
};

export const startBattle = async (pokemon1Id, pokemon2Id) => {
  try {
    const url = `${VITE_API_URL}/battle`;
    const { data } = await axios.post(url, { pokemon1Id, pokemon2Id });
    return data;
  } catch (error) {
    console.log("Error by starting battle", error);
  }
};
