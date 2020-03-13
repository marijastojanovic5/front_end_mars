import React from 'react'
class Login extends React.Component{
  state={
    username:""
  }
  handleChange=(e)=>{

  let copy = {...this.state} 
  copy[e.target.name] = e.target.value
   this.setState(copy)
}
  
    handleLoginSubmit=(e)=>{
    e.preventDefault()
      fetch(`http://localhost:4000/login`,{
        method: "POST",
        headers: {
          "Content-Type" :"application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username
        })
      }).then(res => res.json())
        .then(user => {
         this.props.updateCurrentUser(user)
      })
    }
    
      
    render(){
    return(
        <form onSubmit={this.handleLoginSubmit}>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInput">Name</label>
            <input type="text"  name="username" className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" onChange={this.handleChange}
              value={this.state.username}/>
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-ligh">Login</button>
          </div>
        </div>
      </form>
        
    )
    }
}
export default Login