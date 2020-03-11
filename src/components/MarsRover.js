import React from 'react'

const MarsRover=(props)=>{
    
    return(
        <div>
            {props.marsRoverArray.map(card=> 
            <MarsCard
            key= {card.id}
            card= {card}
            />)}
           
         </div>
    )
    
}
export default MarsRover