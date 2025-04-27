
import './App.css'
import { getListOfPokemon} from './Api'
import { Gamecontroller } from './gamecontroller';
import { useEffect,useState,useRef } from 'react'
import Layout from './layout';
function App() {
  const [pokemonSet, setPokemonSet] = useState(null);
  const pokemons = ['eevee','pikachu','typhlosion'];
  const game = useRef(null)
  useEffect(()=>{
    async function fetchData(){
      let pokemonList = await getListOfPokemon(pokemons);
      setPokemonSet(pokemonList);
    }
    fetchData();
  
  },[])

  useEffect(()=>{
    if(pokemonSet){
      game.current = new Gamecontroller(pokemonSet);
      
    }
    
  },[pokemonSet])

  return (
    <>
    {/* {pokemon ? <p>{pokemon.name}</p> : <p>loading</p>} */}
    <Layout cardSet={game.current.getCardset}/>
    </>
  )
}

export default App
