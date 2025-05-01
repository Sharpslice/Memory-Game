import "../css/card.css"
export default function CardComponent({cardObj,onCardClick}){
   
    return(
        <div className= "card" onClick={()=>onCardClick(cardObj)}>
            <img src={cardObj.url} loading="lazy"></img>
            {cardObj.name}
        </div>


    )
}