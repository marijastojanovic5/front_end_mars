import React from 'react'

class Login extends React.Component {
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
      fetch("http://localhost:4000/login",{
        method: "POST",
        headers: {
          "Content-Type" :"application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username
        })
      }).then(res => res.json())
        .then(user=>{
        
         this.props.updateCurrentUser(user)
         }) 
        }
    
    render() {
    return(

        <div className="bg-img">
          <div className="container-fluid login-container">
            <div className="row login-container">
              <div className ="col-lg-4 offset-lg-4">
                <form action="/action_page.php" className="container" onSubmit={this.handleLoginSubmit}>
                <div className="form-group">
                <h3>Please log in </h3><hr/>
                <label for="username">Username:</label>
                <input type="text" className="form-control" name = "username"    placeholder="Your username here..."  value={this.state.username} onChange={this.handleChange}/>
                </div>
                 <button type="submit" className="btn btn-primary btn-lg btn-block" id="login-btn">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
             )
    }
}
export default Login