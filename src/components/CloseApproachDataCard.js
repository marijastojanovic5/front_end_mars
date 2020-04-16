import React from 'react'
import {Card,ListGroup} from 'react-bootstrap'


const CloseApproachDataCard =(props)=> { 
    console.log("what are props", props)
    return(
        <div className="col-lg-4 card-holder">
        <Card >
        <ListGroup variant="flush">
        <h4>
        <ListGroup.Item  >Name: {props.asteroid[0]} </ListGroup.Item>
        </h4>
        <label>
        <ListGroup.Item className="card-list-item">Nominal approach distance (au) </ListGroup.Item>
        </label>
        <p><ListGroup.Item className="card-list-item">{props.asteroid[4]} </ListGroup.Item></p>

        <label>
        <ListGroup.Item className="card-list-item">Date and time of close approach: </ListGroup.Item>
        </label>
        <p><ListGroup.Item className="card-list-item">{props.asteroid[3]} </ListGroup.Item></p>
        </ListGroup>
       </Card>
       </div>
    )
}
export default CloseApproachDataCard