
import './App.css'
import { getListOfPokemon} from './Api'
import { Gamecontroller } from './gamecontroller';
import { useEffect,useState } from 'react'

function App() {
  const [pokemonSet, setPokemonSet] = useState(null);
  const pokemons = ['eevee','pikachu','typhlosion'];

  useEffect(()=>{
    async function fetchData(){
      let pokemonList = await getListOfPokemon(pokemons);
      setPokemonSet(pokemonList);
    }
    fetchData();
  
  },[])

  useEffect(()=>{
    if(pokemonSet){
      const Game = new Gamecontroller(pokemonSet);
    }
    
  })



  return (
    <>
    {/* {pokemon ? <p>{pokemon.name}</p> : <p>loading</p>} */}
    
    </>
  )
}

export default App
