import React from 'react'
import {Link,withRouter} from 'react-router-dom'
const NavBar=(props)=>{
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" > <i className="pe-7s-rocket">Mars Logo here</i></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    
    <Link to="/about" >About Mars <span className="sr-only">(current)</span></Link>
    <Link to="/pictureoftheday">Pic of the day</Link>
    <Link to="/marsweather">Mars Weather</Link>
    <Link to="/marsrover" >Mars Rover</Link>
    <Link to="/profile">Profile</Link>
    {props.match.url === "/login" ? null :
    <Link to="/login">Login</Link>}
    </div>
  </div>
</nav>
        </div>
    )

}
export default withRouter(NavBar)