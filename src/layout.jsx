import CardComponent from "./components/cardComponent"
export default function Layout({cardSet = null, onCardClick}){
    return(
        <div>
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


