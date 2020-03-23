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
        <form action="/action_page.php" className="container" onSubmit={this.handleLoginSubmit}>
        <label for="username"><b>Username:</b></label>
        <input type="text"  name = "username" placeholder="Your username here..."   value={this.state.username} onChange={this.handleChange}></input>
        <button type="submit" className="btn" id="login-btn">Login</button>
      </form>
    </div>
         )
    }
  }
export default Login