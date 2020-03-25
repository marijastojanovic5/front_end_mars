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
            <div className="container-fluid weather-img mars-weather ">
            <form>
                <h1> What is Mars Rover?</h1>
                <p className="parh">Curiosity is a car-sized rover designed to explore the crater Gale on 
                    Mars as part of NASA's Mars Science Laboratory mission. The rover is 
                    still operational, and as of February 17, 2020, Curiosity has been on 
                    Mars for 2678 sols (2751 total days) since landing on August 6, 2012.
                    Mars 2020 is a Mars rover mission by NASA's Mars Exploration Program 
                    with a planned launch on 17 July 2020, and touch down in Jezero crater
                    on Mars on 18 February 2021.</p><br/>
                  <label>Please select one of the Curiosity's camera to see the pictures od Mars:</label> 
            <select onChange={this.onChangeHandler}>
                {this.camerasNames().map(name=><option value={name}>{name} </option> )}
            </select>
            </form>


            <div className="row ">
            {this.filteredCameraPics().map(card=> 
                <div className="col-lg-3">
            <Link to={`/marsrover/${card.id}`} >
            <img className="rover-img" src={card.image} alt={card.name} />
            <p>{card.name}</p><p>Rover status: {card.status.toUpperCase()}</p>
           </Link>  </div>)}
           
            
             </div>
            </div>
            </React.Fragment>
    )    
            } 
             
}
export default MarsRover