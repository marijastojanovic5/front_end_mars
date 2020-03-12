import React from 'react';
import {Route} from 'react-router-dom'
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
      loading: true
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
        <Route exact path="/login" render={(props)=>(
        <Login/>)}/>
        <Route exact path="/about" component={About}/>
        <Route  path="/marsrover/:id" render={(props)=>{
          let id=parseInt(props.match.params.id)
          let foundCard= this.state.marsRoverArray.find(card =>card.id === id)
          return <MarsCard
          card ={foundCard}/>
        }}/>

        <Route exact path="/marsrover" render={()=>
        <MarsRover 
        marsRoverArray={this.state.marsRoverArray}
       
        />
        }/>
        <Route exact path ="/users/:id" render={(props)=>{
          let id=parseInt(props.match.params.id)
          return <UserProfile id ={id}/>}}/>
     </div>
  )
      }
}

export default App;
