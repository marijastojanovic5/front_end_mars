import React from 'react'
import WeatherContainer from './WeatherContainer'
class MarsWeather extends React.Component {
    
    state={

     sol: {}
    }
    componentDidMount(){
    fetch(`https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_APIKEY}&feedtype=json&ver=1.0`)  
    .then(res=>res.json())
    .then(data=>{
         this.setState({sol: data})
       
       
      })
    }
    
    render(){
        
        return(
         <div>
         <WeatherContainer sol={this.state.sol} /> 
         </div>
    )
    }

}
export default MarsWeather