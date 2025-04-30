import { Cardset } from "./cardSet";
import { useState} from "react";
import Layout from "./layout";
import { Cards } from "./cards";
export default function GameController({list}){
    const convertListToCards= (list) =>{
        return list.map(pokemon => new Cards(pokemon))
    }
    const [cardSet,setCardSet] = useState(new Cardset(convertListToCards(list))); //cardSet is an object

    function handleClick(card){
        if(card.picked)
        {
            console.log("gameOver");
            setCardSet(new Cardset(convertListToCards(list)))
        }
        else{
            card.picked = true;
            //console.log( typeof card)
            setCardSet(new Cardset(cardSet.shuffle(cardSet.getCardSet())));
        }
        
        
        
    }
    return(
        <>
            <Layout cardSet={cardSet.getCardSet()} onCardClick={handleClick}></Layout>
        </>
    );

}