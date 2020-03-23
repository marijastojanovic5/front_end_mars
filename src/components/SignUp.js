import React from "react"
class SignUp extends React.Component {
    state ={
        name: "",
        username: "",
        password: ""
    }
    handleChange=(e)=>{

        let copy = {...this.state} 
        copy[e.target.name] = e.target.value
         this.setState(copy)
      }
      handleSignUpSubmit=(e)=>{
          e.preventDefault()
        fetch("http://localhost:4000/users",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          username: this.state.username,
          password: this.state.password

        })
      }).then(res => res.json())
        .then(user=>{
             this.props.updateCurrentUser(user)
           
         }) 
        }
      



    render(){
        return(
            <div className="bg-img">
            <form action="/action_page.php" className="container" onSubmit={this.handleSignUpSubmit}>
            <label for="name"><b>Name:</b></label>
            <input type="text"  name = "name" placeholder="Your name here..."   value={this.state.name} onChange={this.handleChange}></input>
            <label for="username"><b>Username:</b></label>
            <input type="text"  name = "username" placeholder="Your username here..."   value={this.state.username} onChange={this.handleChange}></input>
            <label for="password"><b>Password:</b></label>
            <input type="password"  name = "password" placeholder="Your password here..."   value={this.state.password} onChange={this.handleChange}></input>
            <button type="submit" className="btn" id="login-btn">SignUp</button>
          </form>
        </div>
             )
        
    }
   
}
export default SignUp