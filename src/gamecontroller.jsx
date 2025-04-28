import { Cardset } from "./cardSet";
import { useState} from "react";
import Layout from "./layout";
import { Cards } from "./cards";
export default function GameController({list}){
    const convertListToCards= (list) =>{
        return list.map(pokemon => new Cards(pokemon))
    }
    const [cardSet,setCardSet] = useState(new Cardset(convertListToCards(list))); //cardSet is an object

    function handleClick(){
         setCardSet(new Cardset(cardSet.shuffle(cardSet.getCardSet())));
        
        console.log("reshuffle")
    }
    return(
        <>
            <Layout cardSet={cardSet.getCardSet()} onClickFunction={handleClick}></Layout>
        </>
    );

}