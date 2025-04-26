
import './App.css'
import { getPokemon } from './Api'
import { useEffect,useState } from 'react'
function App() {
  const [pokemon,setPokemon] = useState(null);

  useEffect(()=>{
    async function fetchData(){
      let data = await getPokemon('eevee');
      setPokemon(data)
      console.log(data)
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
