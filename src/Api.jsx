import { Pokedex } from "pokeapi-js-wrapper";

export async function getPokemon(name){
    const P = new Pokedex();  
    try{
        let Pokemon = await P.getPokemonByName(name);
       
        
        return Pokemon;
    }
    catch (error){
        console.log("error fetching data", (error))
    }
}

export async function getListOfPokemon(pokemons =[]){
    
    const P = new Pokedex();
    try{
        const promises =  pokemons.map(name => P.getPokemonByName(name));
        const list = Promise.all(promises);
        return list;
    }
    catch (error){
        console.log("error fetching list of pokemon",(error));
    }
}