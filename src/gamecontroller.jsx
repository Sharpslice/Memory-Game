import { Cardset } from "./cardSet";
import { useState} from "react";
import Layout from "./layout";
export default function GameController({list}){
    const [cardSet,setCardSet] = useState(new Cardset(list)); //cardSet is an object

    function handleClick(){
        //console.log(cardSet.shuffle(cardSet.getCardSet()))
        setCardSet(new Cardset(list)) // this turrns it into an array
        console.log("reshuffle")
    }
    return(
        <>
            <Layout cardSet={cardSet.getCardSet()} onClickFunction={handleClick}></Layout>
        </>
    );

}