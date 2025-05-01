import { Cardset } from "./cardSet";
import { useState} from "react";
import Layout from "./layout";
import ScoreBoard from "./scoreboard";
import { Cards } from "./cards";
export default function GameController({list}){
    const convertListToCards= (list) =>{
        return list.map(pokemon => new Cards(pokemon))
    }
    

    const [cardSet,setCardSet] = useState(new Cardset(convertListToCards(list))); //cardSet is an object
    const [score,setScore] = useState(0);
    const [highScore,setHighScore] =useState(0)

    function handleClick(card){
        if(card.picked == true)
        {
            console.log("gameOver");
            setScore(0);
            setCardSet(new Cardset(convertListToCards(list)))

            if(score> highScore){
                setHighScore(score);
            }
            
        }
        else{
            card.picked = true;
            setCardSet(new Cardset(cardSet.shuffle(cardSet.getCardSet())));
            setScore(score+1);
        }
        console.log()
        
        
    }
    return(
        <>
        <div id="main">
            <ScoreBoard score = {score} highScore={highScore}></ScoreBoard>
            <Layout cardSet={cardSet.getCardSet()} onCardClick={handleClick}></Layout>
        </div>
            
        </>
    );

}