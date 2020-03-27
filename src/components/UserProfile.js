import React from "react"
import MarsCard from './MarsCard'
import {Link} from 'react-router-dom' 



const UserProfile =(props)=> {

    
        return(
            <div className ="weather-img"> 
                <Link to="/marsrover">Back to Gallery</Link><br/>
              <h3 className="username-data"> Welcome to you profile page, {props.user.username}! </h3><br/>
              <div> <h5 className="card-title">Your library:</h5>
                  {props.favorites.map(card=>
                    <MarsCard
                    card={card}
                    key={card.id}
                    remove={true}
                    onClickHandler={props.onClickHandler}
                    
                    />)}
                    
              </div>
                  

              </div>
        )
    

}
export default UserProfile