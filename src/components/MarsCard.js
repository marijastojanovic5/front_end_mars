import React from 'react'
import { Card,Button,Form } from "react-bootstrap"


class MarsCard extends React.Component{
    state={
        name: "",
        comment: "",
        allReviews: []
    }
    handleChange=(e)=>{
    let copy = {...this.state} 
    copy[e.target.name] = e.target.value
    this.setState(copy)
    }
    
    submitHandler=(e)=>{
       
    }
    

    render(){
    return(
        // <div>
           
        // {/* // {props.card ?  */}
        <React.Fragment>
        <Card className = "h-10 shadow -sm" >
            <Card.Img variant = "top" src = {this.props.card.image}/>
            <Card.Body className ="d-flex flex-column">
                <div  className ="d-flex mb-2 justify-content-between">
                    <Card.Title className = "mb-0 font-weight-bold">{this.props.card.name}
                    </Card.Title>
                </div>
                    <Card.Text className ="text-secondary">Launch date: {this.props.card.launch_date}</Card.Text>
                    <Card.Text className ="text-secondary">Landing date: {this.props.card.landing_date}</Card.Text>
                    <Card.Text className ="text-secondary">Status: {this.props.card.status}</Card.Text>
            </Card.Body>
             {!this.props.remove ?
            <Button className='mt-auto font-weight-bold' variant="success" 
            onClick={()=>{this.props.onClickHandler(this.props.card)}} >Add this to your library</Button> :
            <Button className='mt-auto font-weight-bold' variant="danger" 
            onClick={()=>{this.props.onClickHandler(this.props.card)}} >Remove from your library</Button>}
           </Card>
           <Form onClick={this.submitReview}>
           <Form.Group>
             <Form.Label>Your Name</Form.Label>
             <Form.Control type="text" name="name"  placeholder="Your name here..." onChange={this.handleChange} />
            </Form.Group>
           <Form.Group>
             <Form.Label>Leave a comment</Form.Label>
             <Form.Control type="text" name="comment" placeholder="Leave a comment..."  onChange={this.handleChange}/>
           </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
         </Form>
         
         </React.Fragment>
    
       
       
       
         
   
        
       
       
       
    )
    }
}

export default MarsCard