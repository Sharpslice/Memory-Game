
import './App.css'
import { getListOfPokemon} from './Api'
import GameController from './gamecontroller';
import { useEffect,useState } from 'react'

function App() {
  const [pokemonSet, setPokemonSet] = useState(null);
  const pokemons = ['eevee','pikachu','typhlosion',"flygon","tandemaus","samurott","blaziken"];

  useEffect(()=>{
    async function fetchData(){
      let pokemonList = await getListOfPokemon(pokemons);
      setPokemonSet(pokemonList);
      
    }
    fetchData();
  
  },[])

  return (
    <> 
      {pokemonSet && <GameController list={pokemonSet}></GameController>}
      
    
    
    </>
  )
}

export default App
