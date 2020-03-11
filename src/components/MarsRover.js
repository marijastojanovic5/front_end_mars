import React from 'react'
import MarsCard from './MarsCard'
import {Link} from 'react-router-dom'


const MarsRover=(props)=>{
    
   
    return(
        <div class="row row-cols-1 row-cols-md-4">
            {props.marsRoverArray.map(card=> 
            <Link to={`/marsrover/${card.id}`}>
           <img style ={{width: 100, height: 100}} src={card.image} alt={card.name}/></Link> )}
           </div>
    )
    
}
export default MarsRover