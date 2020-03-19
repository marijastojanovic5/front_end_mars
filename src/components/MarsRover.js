import React from 'react'
import {Link} from 'react-router-dom'



class MarsRover extends React.Component{
    state ={
       currentObj: null
    }

    filteredCameraPics(){
         return(
             this.props.marsRoverArray.filter(img=>img.name ===this.state.currentObj)
         )
    }
     onChangeHandler=(e)=>{
         let cameraName =e.target.value
         this.setState({
             currentObj: cameraName
         })

     }
     camerasNames(){
      return(["Front Hazard Avoidance Camera","Rear Hazard Avoidance Camera",
      "Mast Camera","Chemistry and Camera Complex","Navigation Camera"]
      )
    }
    
    render(){
    return(
        <React.Fragment>
            <form>
                Please select one of the following: 
            <select onChange={this.onChangeHandler}>
                {this.camerasNames().map(name=><option value={name}>{name} </option> )}
            </select>
            </form>
            <div className="row row-cols-1 row-cols-md-4">
             {this.filteredCameraPics().map(card=> 
            <Link to={`/marsrover/${card.id}`}>
            <img style ={{width: 100, height: 100}} src={card.image} alt={card.name} /></Link> )}
            </div>
            </React.Fragment>
    )    
            } 
             
}
export default MarsRover