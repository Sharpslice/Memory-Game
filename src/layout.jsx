import CardComponent from "./components/cardComponent"
import "./css/layout.css"
export default function Layout({cardSet = null, onCardClick}){
    return(
        <div id="cardSet">
            {
                cardSet.map((card)=>(
                    <CardComponent 
                        key={card.id} 
                        cardObj={card} 
                        onCardClick={onCardClick}
                    ></CardComponent>
                ))
                
            }
        </div>
           
    )
}


