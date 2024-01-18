import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export async function buscarPokemon(pokemon: string | number) {
  try {
    const response = await api.get(`pokemon/${pokemon}`);
    return response.data;
  } catch (e) {
    return undefined;
  }
}

export default api;
