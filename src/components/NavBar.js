import React from 'react'
import {withRouter} from 'react-router-dom'
const NavBar=(props)=>{
    return (
            <div>
            <ul>
              
              <li><a href="http://localhost:3000/about">About</a></li>
              <li><a href="http://localhost:3000/pictureoftheday">NASA Picture Of The Day</a></li>
              <li><a href="http://localhost:3000/marsweather">Mars Weather</a></li>
              <li><a href="http://localhost:3000/marsrover">Mars Rover</a></li>
              <li><a href="http://localhost:3000/profile">Profile</a></li>
              <li id="login"><a href="http://localhost:3000/login">Login</a></li>
            </ul>
            </div>
//{props.match.url === "/login" ? null :
//     <Link to="/login">Login</Link>}

    )

}
export default withRouter(NavBar)