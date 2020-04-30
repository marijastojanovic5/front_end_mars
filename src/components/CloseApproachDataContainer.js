import React from 'react'
import CloseApproachDataCard from './CloseApproachDataCard'

class CloseApproachDataContainer extends React.Component{
     state={ 
          asteroids: this.props.asteroids
     }
     
     render(){
    
    return(
            <div className="weather-img">
            <div className="container-fluid mars-weather" >
             <h1>Close approach bodies in the past 2 years</h1>
             <p>Lunar distance (LD), also called Earth–Moon distance,
                  or distance to the Moon, is a unit of measure in 
                  astronomy. It is the average distance from the center 
                  of Earth to the center of the Moon. Below we have  
                  close-approach data (asteroid or comet) within 10 Lunar distances
                   on or after 2018-Jan-01 sorted by distance. One Lunar distance, for example is 238,856 miles. An AU is 389 Lunar distances. </p>
                   

                   <div className ="row">
                        {this.props.asteroids ? this.props.asteroids.map(asteroid => 
                        <CloseApproachDataCard 
                        key={asteroid[0]} 
                        asteroid={asteroid} 
                        
                        />) : null}
                        </div>
             </div>
             </div>
        )
                        }
}
export default CloseApproachDataContainer