export default function Layout({cardSet = null, onClickFunction}){
  
    return(
        <div>
            {
               
                cardSet.map((card)=>(
                <div key ={card.id} onClick={()=>onClickFunction(card.name)}>
                    {
                        card.name
                    }


                </div>
                ))
                
            }
        </div>
           
    )
}


