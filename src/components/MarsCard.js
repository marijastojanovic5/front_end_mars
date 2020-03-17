import React from 'react'
import { Card, Badge, Button } from "react-bootstrap"


const MarsCard=(props)=>{
    return(
    //    <div>
        // {props.card ? 
        <Card className = "h-10 shadow -sm" >
            <Card.Img variant = "top" src = {props.card.image}/>
            <Card.Body className ="d-flex flex-column">
                <div  clasName ="d-flex mb-2 justify-content-between">
                    <Card.Title className = "mb-0 font-weight-bold">{props.card.name}
                    </Card.Title>
                </div>
                    <Card.Text className ="text-secondary">Launch date: {props.card.launch_date}</Card.Text>
                    <Card.Text className ="text-secondary">Landing date: {props.card.landing_date}</Card.Text>
                    <Card.Text className ="text-secondary">Status: {props.card.status}</Card.Text>
            </Card.Body>
             {!props.remove ?
            <Button className='mt-auto font-weight-bold' variant="success" 
            onClick={()=>{props.onClickHandler(props.card)}} >Add this to your library</Button> :
            <Button className='mt-auto font-weight-bold' variant="danger" 
            onClick={()=>{props.onClickHandler(props.card)}} >Remove from your library</Button>}


        </Card>
       
       
         
        //  {/* </div>
        //  </div>
        //  </div>  */}
        //  {/* </div> : */}
        // {/* //  null} 
        // // </div> */}
        
       
       
       
    )
}

export default MarsCard