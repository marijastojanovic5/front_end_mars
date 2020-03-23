import React from "react"
import MarsWeatherCard from './MarsWeatherCard'


const WeatherContainer= (props) =>{
   const sol_keys=props.sol["sol_keys"]
   return(
        <div>
            <p>On Mars, a solar day lasts 24 hours, 
                39 minutes, and 35 seconds. Rounding that out,
                 we say that a day here on Earth works out to
                  an even 24 hours while on Mars, a day lasts 
                  24 hours and 40 minutes</p>
         <div className="container-fluid" >    
        <div className="row">
       {sol_keys ? sol_keys.slice(0,6).map(sol => 
       <MarsWeatherCard 
       key={sol} 
       sol={sol} 
       info={props.sol[sol]} 
       />) : null}
       </div>
       </div>
        
        </div>
    )
}
export default WeatherContainer