import React from "react"
import MarsCard from './MarsCard'
import {Link} from 'react-router-dom' 



const UserProfile =(props)=> {

    
        return(
            <div> 
                <Link to="/marsrover">Back to Gallery</Link><br/>
               Hello {props.user.username} !<br/>
              <div> Your library:
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