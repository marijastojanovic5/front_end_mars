import React from "react"
import {Card,ListGroup} from 'react-bootstrap'
const MarsWeatherCard=(props)=>{
    const {AT, First_UTC}= props.info
    const date = new Date(First_UTC).toDateString()
    return(
        
        <div className="col-lg-4">
        <Card >
        <ListGroup variant="flush">
        <ListGroup.Item>SOL {props.sol}</ListGroup.Item>
        <ListGroup.Item>Day: {date}</ListGroup.Item>
        <ListGroup.Item>Max temperature: {Math.round(AT["mx"])}°C</ListGroup.Item>
        <ListGroup.Item>Min temperature: {Math.round(AT["mn"])}°C</ListGroup.Item>
        </ListGroup>
       </Card>
       </div>
    )
}
export default  MarsWeatherCard