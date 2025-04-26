
import './App.css'
import { getPokemon, getListOfPokemon} from './Api'
import { useEffect,useState } from 'react'
function App() {
  const [pokemon,setPokemon] = useState(null);

  useEffect(()=>{
    async function fetchData(){
      let data = await getPokemon('eevee');
      let test = await getListOfPokemon(['eevee','pikachu','typhlosion']);
      setPokemon(data)
      console.log(data)
      console.log(test)
    }
    fetchData();
  
  },[])
  return (
    <>
    {pokemon ? <p>{pokemon.name}</p> : <p>loading</p>}
    
    </>
  )
}

export default App
