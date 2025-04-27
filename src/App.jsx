
import './App.css'
import { getListOfPokemon} from './Api'
import { Gamecontroller } from './gamecontroller';
import { useEffect,useState } from 'react'
import Layout from './layout';
function App() {
  const [pokemonSet, setPokemonSet] = useState(null);
  const pokemons = ['eevee','pikachu','typhlosion',"flygon","tandemaus","samurott","blaziken"];
  const [game,setGame ]= useState(null)
  useEffect(()=>{
    async function fetchData(){
      let pokemonList = await getListOfPokemon(pokemons);
      setPokemonSet(pokemonList);
    }
    fetchData();
  
  },[])

  useEffect(()=>{
    if(pokemonSet){
      const game = new Gamecontroller(pokemonSet);
      setGame(game);
      console.log(game.getCardSet());
    }
    
  },[pokemonSet])

  return (
    <> 
    { game && <Layout cardSet={game.getCardSet()}></Layout>


    }
      
    
    
    </>
  )
}

export default App
