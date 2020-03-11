import React from 'react'

const MarsCard=(props)=>{
    console.log("Mars card props",props)
   
    return(
        <div>
        {props.card ?
        
      
         
        <div class="col mb-4">
        <div className="card">
         <h6 className="card-title">Picture taken with Mars Rover</h6>
        <img  src={props.card.image} className="card-img-top" alt="mars"/>
         <div className="card-body">
         <h5 className="card-title">{props.card.name}</h5>
         <p className="card-text">Launch date: {props.card.launch_date}</p>
         <p className="card-text">Landing date: {props.card.landing_date}</p>
         <p className="card-text">Status: {props.card.status}</p>
         </div>
        </div>
        </div>:
        null}
        </div>
       
       
       
    )
}

export default MarsCard