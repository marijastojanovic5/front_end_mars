import React from "react"
import CloseAproachDataContainer from './CloseAproachDataContainer'

class CloseAproachData extends React.Component {
    state ={
        asteroids: []
    }
    componentDidMount(){
        fetch("https://ssd-api.jpl.nasa.gov/cad.api?dist-max=10LD&date-min=2018-01-01&sort=dist&body=mars")
        .then(res=>res.json())
        .then(data=>{
         this.setState({asteroids: data.data})
        })
        }
    render(){
        return(
            <div>
         <CloseAproachDataContainer asteroids={this.state.asteroids} /> 
         </div>
        )
    }
}
export default CloseAproachData