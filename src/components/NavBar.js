import React from 'react'
import {Link} from 'react-router-dom'
const NavBar=()=>{
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" > <i className="pe-7s-rocket">Mars Logo here</i></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    
    <Link to="/about"> <a className="nav-item nav-link active" >About Mars <span className="sr-only">(current)</span></a></Link>
    <Link to="/marsweather"> <a className="nav-item nav-link" >Mars Weather</a></Link>
    <Link to="/marsrover"> <a className="nav-item nav-link" >Mars Rover</a></Link>
    <Link to="/login"><a className="nav-item nav-link" >Login</a></Link>
    </div>
  </div>
</nav>
        </div>
    )

}
export default NavBar