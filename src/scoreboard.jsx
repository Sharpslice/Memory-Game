export default function ScoreBoard({score,highScore}){
    return(
        <div id="scoreBoard">
            <span>score: {score}</span>
            <span>best: {highScore}</span>


        </div>

    )
}