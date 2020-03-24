import React from "react"
import {Card,ListGroup} from 'react-bootstrap'
const MarsWeatherCard=(props)=>{
    const {AT, First_UTC}= props.info
    const date = new Date(First_UTC).toDateString()
    return(
        
        <div className="col-lg-4 card-holder">
        <Card >
            
        <ListGroup variant="flush">
        <h4>
        <ListGroup.Item>SOL {props.sol}</ListGroup.Item>
        </h4>
        <label>
        <ListGroup.Item>Day: </ListGroup.Item>
        </label>
        <p> <ListGroup.Item>{date} </ListGroup.Item></p>

        <label>
        <ListGroup.Item>Max temperature </ListGroup.Item>
        </label>
        <p> <ListGroup.Item>{Math.round(AT["mx"])}°C</ListGroup.Item></p>
        <label>
        <ListGroup.Item>Min temperature </ListGroup.Item>
        </label>
        <p> <ListGroup.Item>{Math.round(AT["mn"])}°C</ListGroup.Item></p>
        </ListGroup>
       </Card>
       </div>
    )
}
export default  MarsWeatherCard