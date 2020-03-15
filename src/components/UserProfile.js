import React from "react"
import MarsCard from './MarsCard'


const UserProfile =(props)=> {
    //debugger
   console.log("what is this",props)

  
    
        return(
            <div> 
               Hello {props.user.username} !<br/>
              <div> Your library:
                  {props.favorites.map(card=>
                    <MarsCard
                    card={card}
                    key={card.id}
                    removeMarsCard={props.removeMarsCard}
                    />)}
              </div>

               
               
           </div>
        )
    

}
export default UserProfile