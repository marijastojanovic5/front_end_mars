import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './components/About'
import Login from "./components/Login"
import './App.css';
import MarsRover from './components/MarsRover';
import MarsCard from './components/MarsCard';
import UserProfile from './components/UserProfile'

class App extends React.Component {
   state={
      marsRoverArray: [],
      currentUser: null
    }
     
    updateCurrentUser=(user)=>{
      this.setState({
        currentUser: user
      })
      
    }
  
  componentDidMount(){
    fetch("http://localhost:4000/mars_cards")
    .then(res=>res.json())
    .then(array=>this.setState({
      marsRoverArray: array
    }))
    }
   
    
  render(){
  return (
    
    <div className="App">
     
        <NavBar />
        <Switch>
        <Route exact path="/about" component={About}/>
        <Route  path="/marsrover/:id" render={(props)=>{
          let id=parseInt(props.match.params.id)
          let foundCard= this.state.marsRoverArray.find(card =>card.id === id)
          return <MarsCard
          card ={foundCard}/>
        }}/>
         <Route exact path="/login" render={() => {
              return this.state.currentUser ? <UserProfile user={this.state.updateCurrentUser}/> : <Login
                updateCurrentUser={this.updateCurrentUser}
              />
            }} /> 
       

        <Route exact path="/marsrover" render={()=>
        <MarsRover 
        marsRoverArray={this.state.marsRoverArray}
       
        />
        }/>
        <Route exact path ="/users/:id" render={(props)=>{
          let id=parseInt(props.match.params.id)
          return <UserProfile id ={id}/>}}/>
           </Switch>
        
          
     </div>
  )
      }
}

export default App;
