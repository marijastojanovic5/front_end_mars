import React from "react"


const UserProfile =(props)=> {
 let {name, username}= props.user
  
    
        return(
            <div> 
               Hello {username} !<br/>
               Your library :

               
               
           </div>
        )
    

}
export default UserProfile