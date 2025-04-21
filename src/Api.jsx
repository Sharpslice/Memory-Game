import { Pokedex } from "pokeapi-js-wrapper";

export async function getPokemon(name){
    const P = new Pokedex;  
    try{
        let Pokemon = await P.getPokemonByName(name);
        return Pokemon;
    }
    catch (error){
        console.log("error fetching data", (error))
    }
}