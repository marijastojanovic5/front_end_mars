import React from 'react'
import CloseAproachDataCard from './CloseAproachDataCard'

const CloseAproachDataContainer=({asteroids})=>{
    
    return(
            <div className="weather-img">
            <div className="container-fluid mars-weather" >
             <h1>Close aproach bodies in the past 2 years</h1>
             <p>Lunar distance (LD), also called Earth–Moon distance,
                  or distance to the Moon, is a unit of measure in 
                  astronomy. It is the average distance from the center 
                  of Earth to the center of the Moon. Below we have  
                  close-approach data within 10 lunar distances
                   on or after 2018-Jan-01 sorted by distance.</p>

                   <div className ="row">
                        {asteroids ? asteroids.map(asteroid => 
                        <CloseAproachDataCard 
                        key={asteroid[0]} 
                        asteroid={asteroid} 
                        
                        />) : null}
                        </div>
             </div>
             </div>
        )
    
}
export default CloseAproachDataContainer