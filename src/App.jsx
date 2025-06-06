
import './App.css'
import { getListOfPokemon} from './Api'
import GameController from './gamecontroller';
import { useEffect,useState } from 'react'

function App() {
  const [pokemonSet, setPokemonSet] = useState(null);
  const pokemons = ['eevee','pikachu',"flygon","tandemaus",
                    "mudkip","blaziken","mew","dugtrio",
                    "salamence", "rampardos","skarmory",
                    "darkrai","registeel","swalot","zekrom",
                    "gliscor","escavalier","luxray","dustox",
                    "cobalion"

                  ];

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
