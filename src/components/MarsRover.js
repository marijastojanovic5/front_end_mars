import React from 'react'
import MarsCard from './MarsCard'

const MarsRover=(props)=>{
   
    return(
        <div class="row row-cols-1 row-cols-md-4">
            {props.marsRoverArray.map(card=> 
            
            <MarsCard
            key= {card.id}
            card= {card}
            />)}
           
         </div>
    )
    
}
export default MarsRover