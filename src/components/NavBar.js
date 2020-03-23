import React from 'react'
import {withRouter,Link} from 'react-router-dom'
const NavBar=(props)=>{
    return (
            <div>
            <ul>
            
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/pictureoftheday'>NASA Picture Of The Day</Link></li>
              <li><Link to='/marsweather'>Mars Weather</Link></li>
              <li><Link to="/marsrover">Mars Rover</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li id="login"><Link to="/login">Login</Link></li>
              <li id="login"><Link to="/signup">SignUp</Link></li> 


            </ul>
            </div>
//{props.match.url === "/login" ? null :
//     <Link to="/login">Login</Link>}

    )

}
export default withRouter(NavBar)