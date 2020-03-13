import React from 'react'
class Login extends React.Component{
  state={
    name:"",
    username:""
  }
  onChange=(e)=>{
    console.log("Clicking in Login Form ",e)
  }
  handleLoginSubmit=()=>{
      fetch(`http://localhost:4000/users/${this.props.id}`,{
        method: "POST",
        headers: {
          "Content-Type" :"application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          username: this.state.username
        })
      }).then(res => res.json())
        .then(data => {
         console.log(data)
      })
    }
    
      
    render(){
    return(
        <form onSubmit={this.handleLoginSubmit}>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInput">Name</label>
            <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" onChange={this.handleChange}
              value={this.state.name}/>
          </div>
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" onChange={this.handleChange}
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