import React from "react"
import MarsWeatherCard from './MarsWeatherCard'


const WeatherContainer= (props) =>{
   const sol_keys=props.sol["sol_keys"]
   return(
         <div className="weather-img">
         <div className="container-fluid mars-weather" >
             <h1>Mars Weather</h1>
            <p>On Mars, a solar day lasts 24 hours, 
                39 minutes, and 35 seconds. Rounding that out,
                 we say that a day here on Earth works out to
                  an even 24 hours while on Mars, a day lasts 
                  24 hours and 40 minutes. The way that scientists mark the time of Mars year is to use solar longitude, abbreviated Ls (read "ell sub ess"). Ls is 0° at the vernal equinox (beginning of northern spring), 90° at summer solstice, 180° at autumnal equinox, and 270° at winter solstice.</p>
                
        <div className ="row">
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