import React from 'react'
import { Button,Form} from "react-bootstrap"
import {Link} from 'react-router-dom'


class MarsCard extends React.Component{
    state={
      
        name: "",
        comment: "",
        allComments: []
    }


    componentDidMount(){
        fetch(`http://localhost:4000/mars_cards/${this.props.card.id}`)
        .then(res =>res.json())
        .then(data => {
            this.setState({allComments: data["comments"]})
    })}
    handleChange=(e)=>{
    let copy = {...this.state} 
    copy[e.target.name] = e.target.value
    this.setState(copy)
    }
    
    submitReview=(e)=>{
       e.preventDefault()
       fetch("http://localhost:4000/comments",{
           method: "POST",
           headers: {
            "Content-Type" :"application/json",
            "Accept": "application/json"
           },
           body: JSON.stringify({comment: this.state.comment,user_id: this.props.userId, mars_card_id: this.props.card.id,name: this.state.name})

         })
         .then(res=>res.json())
         .then(comment=>{
           this.setState({
              allComments: [comment, ...this.state.allComments], comment: ""
           })
          
             })
           
        }  
        deleteHandler=(comment)=>{

           let commentId = comment.id
           
        fetch(`http://localhost:4000/comments/${commentId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        let res = this.state.allComments.filter(comm => comm.id !== comment.id)
        this.setState({allComments: res})
        
         }    
  
    render(){
    return(
        
       
        <div className= "container-fluid weather-img mars-detail-wrapper">
            <div className="row">
               <div className="col-lg-4">
            <img  className="image-mars" variant="top" src ={this.props.card.image} alt="mars-card"/>
            </div>
            <div className="col-lg-8">
           
                <div className ="main-title">
                <h1>{this.props.card.name}</h1>
                </div>
                <div className="mars-data">
                <span> Launch date: </span>
                <p>{this.props.card.launch_date}</p>
                <span> Landing date: </span>
                <p>{this.props.card.landing_date}</p>
                <span> Status: </span>
                <p>{this.props.card.status}</p>
                </div>
                
             {!this.props.remove ?
            <Button className='mt-auto font-weight-bold' variant="success" 
            onClick={()=>{this.props.onClickHandler(this.props.card)}} >Add this to your library</Button> :
            <Button className='mt-auto font-weight-bold' variant="danger" 
            onClick={()=>{this.props.onClickHandler(this.props.card)}} >Remove from your library</Button>}
            </div>
            </div>
            <div className="row form-container">
            <div className="col-lg-4">
            <Form onSubmit={this.submitReview}>
            <Form.Group>
             <Form.Label className="form-subtitle">Leave a comment</Form.Label>
             <Form.Control textarea="text" name="comment" placeholder="Leave a comment..."   value={this.state.comment} onChange={this.handleChange}/>
           </Form.Group>
           <Button variant="primary" type="submit">Submit</Button>
          <h5 className="form-subtitle">All comments:</h5>
          
          {this.state.allComments ? 
          this.state.allComments.map(commentObj=>
              <li className="letters">
              {commentObj.comment} 
              <Button variant="danger" onClick={()=>this.deleteHandler(commentObj)}> Delete</Button>
              </li>) :
           null }
           
          </Form>
          </div>
          </div>
          <Link to="/marsrover">Back to Gallery</Link><br/>
          </div>
    )
    }
}

export default MarsCard