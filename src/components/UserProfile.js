import React from "react"


class UserProfile extends React.Component {

    state= {
        userObj: {}
    }
    componentDidMount(){
        fetch(`http://localhost:4000/users/${this.props.id}`)
        .then(res=>res.json())
        .then(user=>this.setState(
            {userObj: user}
            ))
        
    }
    render() {
        return(
            <div>Helloo</div>
        )
    }

}
export default UserProfile