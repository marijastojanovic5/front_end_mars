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
                <div className="container-fluid login-container">
                <div className="row login-container">
                <div className ="col-lg-4 offset-lg-4">
            <form action="/action_page.php" className="container" onSubmit={this.handleSignUpSubmit}>
            <div className="form-group">
            <h3>Please sign up </h3><hr/>
            <label for="name">Name:</label>
            <input type="text" className="form-control" name = "name"    placeholder="Your name here..."  value={this.state.name} onChange={this.handleChange}/>
            <label for="username">Username:</label>
            <input type="text" className="form-control" name = "username"    placeholder="Your username here..."  value={this.state.username} onChange={this.handleChange}/>
            <label for="password">Password:</label>
            <input type="password" className="form-control" name = "password"    placeholder="Your password here..."  value={this.state.password} onChange={this.handleChange}/>
        </div>
            <button type="submit" className="btn" id="login-btn">SignUp</button>
          </form>
 </div>
</div>
</div>
</div>

)
        
    }
   
}
export default SignUp