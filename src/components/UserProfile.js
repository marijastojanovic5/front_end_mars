import React from "react"
import MarsCard from './MarsCard'
import { Button } from "react-bootstrap"


const UserProfile =(props)=> {
    
        return(
            <div> 
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