import { Cards } from "./cards"

export class Cardset{
    constructor(cards){
        this.cardSet = this.shuffle(cards);
    }
   
    shuffle(array){
        const copy = [...array];
        for(let i = copy.length -1; i> 0;i--){
            let j = Math.floor(Math.random() * (i+1));
            [copy[i],copy[j]] = [copy[j], copy[i]]
            
        }
        return copy;
    }
    getCardSet(){
        return this.cardSet
    }
    


    
}