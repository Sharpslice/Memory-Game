export default function Layout({cardSet = null}){

    return(
        <div>
            {
               
                cardSet.map((card)=>(
                <div key ={card.id}>
                    {
                        card.name
                    }


                </div>
                ))
                
            }
        </div>
           
    )
}


