import React from 'react'
import {Link} from 'react-router-dom'



class MarsRover extends React.Component{
    state ={
        start: 0,
        numToDispay: 4,
        currentObj: "Front Hazard Avoidance Camera"
    }


     filteredCameraPics(){
         return(
             this.props.marsRoverArray.filter(img=>img.name ===this.state.currentObj)
         )

     }
     dispalyedPics(){
        return(
            this.filteredCameraPics().splice(this.state.start,(this.state.start + this.state.numToDispay))
        )

    }
    // camerasNames(){
    //  return (
    //  fetch("http://localhost:4000/cameras")
    // .then(res => res.json())
    // .then(data=> console.log(data))
    // )}
    //data is: 
    //   ["Front Hazard Avoidance Camera","Rear Hazard Avoidance Camera",
    //   "Mast Camera","Chemistry and Camera Complex","Navigation Camera"]
    
      
    render(){
    return(
        <React.Fragment>
            <form>
           <select >
               
                <option>Choose Mars Rover Cameras</option>
                  {/* <option>{this.camerasNames().map(data=>data.name)}</option>  */}
            </select>
            
            </form>


            <div className="row row-cols-1 row-cols-md-4">

            {this.dispalyedPics().map(card=> 
            <Link to={`/marsrover/${card.id}`}>
            <img style ={{width: 100, height: 100}} src={card.image} alt={card.name} /></Link> )}
            </div>
            </React.Fragment>
    )    
            } 
             
}
export default MarsRover