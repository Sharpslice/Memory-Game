import { Cardset } from "./cardSet";
export class Gamecontroller {
    constructor(pokemons){
        this.cardSet = new Cardset(pokemons)
        this.pickedCards = [];
    }
    getCardSet(){
        return this.cardSet
    }



}