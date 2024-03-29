import { useEffect, useState } from "react";
import Abilities from "./components/Abilities";
import { buscarPokemon } from "./api";
import Sprite from "./components/Sprite";
import Nav from "./components/Nav";

function App() {
  const [pokemon, setPokemon] = useState<any>();
  const [search, setSearch] = useState("bulbasaur");

  useEffect(() => {
    buscarPokemon("bulbasaur").then((placeholder) => setPokemon(placeholder));
  }, []);

  return (
    <>
      <Nav/>
      Nome do Pokémon: <br />
      <input
        type="text"
        name="pokemonName"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <br />
      <br />
      <button
        onClick={() =>
          buscarPokemon(search).then((pokemon) => setPokemon(pokemon))
        }
      >
        Procurar Pokémon
      </button>
      <br></br>
      {pokemon ? (
        <>
          <Sprite pokemon={pokemon} />
          <h3 className="text-2xl font-bold">
            Habilidades do #{pokemon.id} - {pokemon.name}
          </h3>
          <Abilities abilityList={pokemon.abilities} />
          {}
        </>
      ) : (
        <p>Pokémon não existe</p>
      )}
    </>
  );
}
export default App;
