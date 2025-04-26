import { Cards } from "./cards"

export class Cardset{
    constructor(cards){
        this.cardSet = cards.map(pokemon => new Cards(pokemon))
    }

    shuffle(){

    }
    


    
}