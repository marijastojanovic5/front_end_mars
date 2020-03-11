import React from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './components/About'
import './App.css';
import MarsRover from './components/MarsRover';

class App extends React.Component {
   state={
      marsRoverArray: []
    }
  
  componentDidMount(){
    fetch("http://localhost:4000/mars_cards")
    .then(res=>res.json())
    .then(data=>console.log(data))
    }
    render(){
  return (
    
    <div className="App">
     
        <NavBar />
        <Route exact path="/about" component={About}/>
        <Route exact path="/marsrover" component={MarsRover}/>
        
       
   
    </div>
  )
  }
}

export default App;
