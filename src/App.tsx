import { useEffect, useState } from 'react'
import './App.css'
import Abilities from './components/Abilities'
import { buscarPokemon } from './api'

function App() {
  const [pokemon, setPokemon] = useState<any>() 
  const [search, setSearch] = useState("ditto")

  useEffect(() => {
    buscarPokemon("ditto").then((placeholder) => setPokemon(placeholder))
  }, [])

  return (
    <>
    <h1>My Pokedex</h1>
    
      Nome do Pokémon: <br/>
      <input type="text" name='pokemonName' value={search} onChange={(event) => setSearch(event.target.value)}/>
      <br/><br/>
      <button onClick={() => buscarPokemon(search).then((pokemon) => setPokemon(pokemon))}>Procurar Pokémon</button>
      <br></br>
      {pokemon ? 
        <>
         <h3>Habilidades do #{pokemon.id} - {pokemon.name}</h3>
         <Abilities abilityList={pokemon.abilities}/>
         {}
        </>
        : <p>Pokémon não existe</p>
      }  
    
     
     
    </>
  )
}

{/*
  COISINHAS QUE FALTARAM
  Exibição condicional
  geração de lista
  useEffect
  integração com API
*/}
export default App
