import React from 'react'
import {Link} from 'react-router-dom'

class MarsRover extends React.Component{
    state ={
       currentObj: "Front Hazard Avoidance Camera"
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
            <div className="container">
            <form>
                Please select one of the following: 
            <select onChange={this.onChangeHandler}>
                {this.camerasNames().map(name=><option value={name}>{name} </option> )}
            </select>
            </form>


            <div className="row">
            {this.filteredCameraPics().map(card=> 
            <Link to={`/marsrover/${card.id}`}>
                <div className="col-lg-3">
            <img className="" src={card.image} alt={card.name} /></div></Link> )}
            
             </div>
            </div>
            </React.Fragment>
    )    
            } 
             
}
export default MarsRover