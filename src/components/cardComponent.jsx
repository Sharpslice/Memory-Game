import "../css/card.css"
export default function CardComponent({cardObj,onCardClick}){
   
    return(
        <div className= "card" onClick={onCardClick}>
            <img src={cardObj.url} loading="lazy"></img>
            {cardObj.name}
        </div>


    )
}