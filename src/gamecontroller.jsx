import { Cardset } from "./cardSet";
import { useState} from "react";
import Layout from "./layout";
export default function GameController({list}){
    const [cardSet] = useState(new Cardset(list));

    function handleClick(card){
        console.log(card)
    }
    return(
        <>
            <Layout cardSet={cardSet.getCardSet()} onClickFunction={handleClick}></Layout>
        </>
    );

}