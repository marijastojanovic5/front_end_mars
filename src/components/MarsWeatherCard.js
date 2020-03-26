import React from "react"
import {Card,ListGroup} from 'react-bootstrap'
const MarsWeatherCard=(props)=>{
    const {AT, First_UTC,Season}= props.info
    const date = new Date(First_UTC).toDateString()
    return(
        
        <div className="col-lg-4 card-holder">
        <Card >
        <ListGroup variant="flush">
        <h4>
        <ListGroup.Item  >SOL {props.sol}</ListGroup.Item>
        </h4>
        <label>
        <ListGroup.Item className="card-list-item">{Season} </ListGroup.Item>
        </label>
        <label>
        <ListGroup.Item className="card-list-item">Day: </ListGroup.Item>
        </label>
        <p><ListGroup.Item className="card-list-item">{date} </ListGroup.Item></p>
         <label>
        <ListGroup.Item className="card-list-item">High   <i class='fas fa-temperature-high'></i> </ListGroup.Item>
        </label >
        <p><ListGroup.Item className="card-list-item">{Math.round(AT["mx"])}°C</ListGroup.Item></p>
        <label>
        <ListGroup.Item className="card-list-item">Low   <i class='fas fa-temperature-low'></i></ListGroup.Item>
        </label>
        <p> <ListGroup.Item className="card-list-item">{Math.round(AT["mn"])}°C</ListGroup.Item></p>
        </ListGroup>
       </Card>
       </div>
    )
}
export default  MarsWeatherCard