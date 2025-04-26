
import './App.css'
import { getPokemon, getListOfPokemon} from './Api'
import { Gamecontroller } from './gamecontroller';
import { useEffect,useState } from 'react'
function App() {
  // const [pokemon,setPokemon] = useState(null);

  // useEffect(()=>{
  //   async function fetchData(){
  //     let data = await getPokemon('eevee');
  //     let test = await getListOfPokemon(['eevee','pikachu','typhlosion']);
  //     setPokemon(data)
  //     console.log(data)
  //     console.log(test)
  //   }
  //   fetchData();
  
  // },[])


  const [cardSet, setCardSet] = useState(null);
  const pokemons = ['eevee','pikachu','typhlosion'];

  useEffect(()=>{
    const Game = new Gamecontroller(pokemons);


  },[])



  return (
    <>
    {/* {pokemon ? <p>{pokemon.name}</p> : <p>loading</p>} */}
    
    </>
  )
}

export default App
